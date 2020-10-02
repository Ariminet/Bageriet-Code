import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import API from '../../../API';
import './style.scss';
const CreateLogin = () => {
  const [payload, setPayload] = useState({
    brugernavn: '',
    fornavn: '',
    efternavn: '',
    email: '',
    password: '',
  });

  const [redirect, setRedirect] = useState(false);
  const { brugernavn, fornavn, efternavn, email, password } = payload;
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const res = await API.createLogin('bruger', payload, setRedirect);
    } catch (err) {
      console.log(err);
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="create-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="brugernavn"
          aria-label="brugernavn"
          value={brugernavn}
          onChange={handleChange}
          placeholder="Dit brugernavn..."
          required
        />
        <input
          type="text"
          name="fornavn"
          aria-label="fornavn"
          value={fornavn}
          onChange={handleChange}
          placeholder="Dit fornavn..."
          required
        />
        <input
          type="text"
          name="efternavn"
          aria-label="efternavn"
          value={efternavn}
          onChange={handleChange}
          placeholder="Dit efternavn..."
          required
        />
        <input
          type="email"
          name="email"
          aria-label="email"
          value={email}
          onChange={handleChange}
          placeholder="Din email..."
          required
        />

        <input
          type="password"
          name="password"
          aria-label="password"
          value={password}
          required
          onChange={handleChange}
          placeholder="Dit password... min 6 character"
        />

        <button type="submit">Create Login</button>
        <NavLink to="/login">Go to Login</NavLink>
      </form>
    </div>
  );
};

export default CreateLogin;
