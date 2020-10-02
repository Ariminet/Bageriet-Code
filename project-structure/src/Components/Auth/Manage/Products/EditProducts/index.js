import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../../../API';
import './style.scss';
const EditProducts = ({ match }) => {
  const imgPath = 'http://localhost:5033/images/';
  const [file, setFile] = useState('');
  const [payload, setPayload] = useState({
    titel: '',
    teaser: '',
    beskrivelse: '',
    tilberedningstid: '',
    pris: '',
    antal: '',
    kategori: '',
  });
  const [currentCategory, setCurrentCategory] = useState({});
  const [category, setCategory] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const {
    titel,
    teaser,
    beskrivelse,
    tilberedningstid,
    kategori,
    pris,
    antal,
    image,
  } = payload;
  useEffect(() => {
    API.getDataCat(
      `/produkter/${match.params.productId}`,
      setPayload,
      setCurrentCategory
    );
    API.getData('/kategorier', setCategory);
  }, [match.params.productId]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleCategory = (e) => {
    setPayload({ ...payload, kategori: e.target.value });
    setCurrentCategory(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const lastPayload = {
      titel,
      teaser,
      beskrivelse,
      tilberedningstid,
      pris,
      antal,
      kategori,
    };

    const formData = new FormData();
    formData.append('produkt', JSON.stringify(lastPayload));

    formData.append('image', file);

    try {
      const res = await API.putData(
        `/produkter/admin/${match.params.productId}`,
        formData,
        setRedirect
      );
      return res;
    } catch (err) {
      alert(err.message);
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
    <div className="edit-product-container">
      <figure className="product-img-container">
        <img src={imgPath + image} alt={image} />
      </figure>
      <form onSubmit={onSubmit} className="edit-product-form">
        <input
          type="text"
          name="titel"
          aria-label="titel"
          value={titel}
          placeholder="Produkt title"
          onChange={onChange}
          required
        />
        <textarea
          type="text"
          name="teaser"
          aria-label="teaser"
          value={teaser}
          placeholder="Produkt teaser"
          onChange={onChange}
          required
        />
        <textarea
          type="text"
          name="beskrivelse"
          aria-label="beskrivelse"
          value={beskrivelse}
          placeholder="Produkt beskrivelse"
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="tilberedningstid"
          aria-label="tilberedningstid"
          value={tilberedningstid}
          placeholder="Produkt tilberedningstid"
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="pris"
          aria-label="pris"
          value={pris}
          placeholder="Produkt pris"
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="antal"
          aria-label="antal"
          value={antal}
          placeholder="Produkt antal"
          onChange={onChange}
          required
        />
        <select onChange={handleCategory} name="kategori" aria-label="kategori">
          <option value={currentCategory._id}>{currentCategory.titel}</option>
          {categoryList}
        </select>
        <input type="file" aria-label="file" onChange={onFileChange} />
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProducts;
