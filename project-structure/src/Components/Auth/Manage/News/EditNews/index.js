import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../../../API';
import './style.scss';
const EditNews = ({ match }) => {
  const imgPath = 'http://localhost:5033/images/';
  const [file, setFile] = useState('');
  const [payload, setPayload] = useState({
    titel: '',
    teaser: '',
    nyhedstekst: '',
    image: '',
  });
  const [redirect, setRedirect] = useState(false);
  const { titel, teaser, nyhedstekst, image } = payload;

  useEffect(() => {
    API.getData(`/nyheder/${match.params.newsId}`, setPayload);
  }, [match.params.newsId]);

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
      const res = await API.putData(
        `/nyheder/admin/${match.params.newsId}`,
        formData,
        setRedirect
      );
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  if (redirect) {
    return <Redirect to="/admin/manage/nyheder" />;
  }
  return (
    <div className="edit-news-container">
      <figure className="news-img-container">
        <img src={imgPath + image} alt={image} />
      </figure>
      <form onSubmit={onSubmit} className="edit-news-form">
        <input
          type="text"
          name="titel"
          aria-label="titel"
          value={titel}
          required
          placeholder="Nyheds title"
          onChange={onChange}
        />
        <input
          type="text"
          name="teaser"
          aria-label="teaser"
          value={teaser}
          required
          placeholder="Nyheds teaser"
          onChange={onChange}
        />
        <textarea
          type="text"
          name="nyhedstekst"
          aria-label="nyhedstekst"
          value={nyhedstekst}
          required
          placeholder="Nyheds text"
          onChange={onChange}
        />
        <input type="file" aria-label="file" onChange={onFileChange} />
        <button type="submit">Submit Edit</button>
      </form>
    </div>
  );
};

export default EditNews;
