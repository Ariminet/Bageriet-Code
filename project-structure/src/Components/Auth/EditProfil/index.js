import React, { useEffect, useState } from 'react';
import API from '../../../API';
import './style.scss';
const EditProfile = () => {
  const [payload, setPayload] = useState({
    brugernavn: '',
    fornavn: '',
    efternavn: '',
    email: '',
  });
  const [reload, setReload] = useState(false);

  const { brugernavn, fornavn, efternavn, email } = payload;

  useEffect(() => {
    API.setUser(
      `/bruger/admin/${JSON.parse(localStorage.getItem('user'))}`,
      setPayload
    );
    setReload(false);
  }, [reload]);

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (var k in payload) {
      formData.append(k, payload[k]);
    }
    API.editUser(
      `/bruger/admin/${JSON.parse(localStorage.getItem('user'))}`,
      formData
    );
    setReload(true);
  };
  return (
    <form onSubmit={handleSubmit} className="edit-container">
      <label htmlFor="brugernavn">Brugernavn:</label>
      <input
        type="text"
        name="brugernavn"
        aria-label="brugernavn"
        value={brugernavn}
        onChange={handleChange}
      />
      <label htmlFor="fornavn">Fornavn:</label>
      <input
        type="text"
        name="fornavn"
        aria-label="fornavn"
        value={fornavn}
        onChange={handleChange}
      />
      <label htmlFor="efternavn">Efternavn:</label>
      <input
        type="text"
        name="efternavn"
        aria-label="efternavn"
        value={efternavn}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        aria-label="email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        aria-label="password"
        placeholder="Nyt password"
        onChange={handleChange}
      />
      <button type="submit">Edit Profil</button>
    </form>
  );
};

export default EditProfile;
