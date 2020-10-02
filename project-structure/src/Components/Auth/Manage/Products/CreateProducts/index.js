import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../../../API';
import './style.scss';

const CreateProducts = () => {
  const [file, setFile] = useState('');
  const [payload, setPayload] = useState({});
  const [category, setCategory] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    API.getData('/kategorier', setCategory);
  }, []);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleCategory = (e) => {
    setPayload({ ...payload, kategori: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('produkt', JSON.stringify(payload));
    formData.append('image', file);

    try {
      const res = await API.postData('/produkter/admin', formData, setRedirect);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  const categoryList = category.length
    ? category.map((item) => {
        return (
          <option key={item._id} name={item.titel} value={item._id}>
            {item.titel}
          </option>
        );
      })
    : null;

  if (redirect) {
    return <Redirect to="/admin/manage/produkter" />;
  }

  return (
    <form onSubmit={onSubmit} className="create-product-form">
      <input
        type="text"
        name="titel"
        aria-label="titel"
        placeholder="Produkt title"
        onChange={onChange}
        required
      />
      <textarea
        type="text"
        name="teaser"
        aria-label="teaser"
        placeholder="Produkt teaser"
        onChange={onChange}
        required
      />
      <textarea
        type="text"
        name="beskrivelse"
        aria-label="beskrivelse"
        placeholder="Produkt beskrivelse"
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="tilberedningstid"
        aria-label="tilberedningstid"
        placeholder="Produkt tilberedningstid"
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="pris"
        aria-label="pris"
        placeholder="Produkt pris"
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="antal"
        aria-label="antal"
        placeholder="Produkt antal"
        onChange={onChange}
        required
      />
      <select onChange={handleCategory} name="kategori" aria-label="kategori">
        <option>Vælg Kategori</option>
        {categoryList}
      </select>
      <input type="file" aria-label="file" onChange={onFileChange} />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProducts;
