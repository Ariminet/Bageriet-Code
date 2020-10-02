import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../API';

import './style.scss';
const NewsLetter = () => {
  const imgPath = 'http://localhost:5033/images/flute-i-pose.jpg';
  const [email, setEmail] = useState({ email: '' });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setEmail({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    API.tilmeldNewsLetter('/nyhedsbrevtilmelding', email);
    setRedirect(true);
    setEmail({ email: '' });
  };

  if (redirect) {
    return <Redirect to="/nyhedsbrev/bekræftigelse" />;
  }
  return (
    <section className="news-letter-container">
      <img src={imgPath} alt={imgPath} />

      <div className="news-letter">
        <div className="news-letter-text-container">
          <h3>Tilmeld dig vores nyhedsbrev</h3>
          <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <i className="far fa-envelope"></i>

          <input
            type="email"
            name="email"
            value={email.email}
            aria-label="email"
            required
            placeholder="Indtast din email..."
            onChange={handleChange}
          />

          <button type="submit">TILMELD</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
