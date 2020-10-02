import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../../../API';
import './style.scss';
const CreateNews = () => {
  const [file, setFile] = useState('');
  const [payload, setPayload] = useState({});
  const [redirect, setRedirect] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);

    const formData = new FormData();
    formData.append('nyhed', JSON.stringify(payload));
    formData.append('image', file);

    try {
      const res = await API.postData('/nyheder/admin', formData, setRedirect);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  if (redirect) {
    return <Redirect to="/admin/manage/nyheder" />;
  }

  return (
    <form onSubmit={onSubmit} className="create-news-form">
      <input
        type="text"
        name="titel"
        aria-label="titel"
        placeholder="Nyheds title"
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="teaser"
        aria-label="teaser"
        placeholder="Nyheds teaser"
        onChange={onChange}
        required
      />
      <textarea
        type="text"
        name="nyhedstekst"
        aria-label="nyhedstekst"
        placeholder="Nyheds text"
        onChange={onChange}
        required
      />
      <input type="file" aria-label="file" onChange={onFileChange} />
      <button type="submit">Create News</button>
    </form>
  );
};

export default CreateNews;
