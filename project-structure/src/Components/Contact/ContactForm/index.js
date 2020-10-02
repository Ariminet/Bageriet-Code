import React, { useState } from 'react';
import API from '../../../API';
import './style.scss';
const ContactForm = () => {
  const [payload, setPayload] = useState({
    navn: '',
    email: '',
    emne: '',
    besked: '',
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.SendContact('/kontakt', payload);
    setPayload({
      navn: '',
      email: '',
      emne: '',
      besked: '',
    });
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="navn"
        value={payload.navn}
        aria-label="navn"
        required
        placeholder="Dit navn..."
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        aria-label="email"
        value={payload.email}
        required
        placeholder="Din email..."
        onChange={handleChange}
      />
      <input
        type="text"
        name="emne"
        aria-label="emne"
        value={payload.emne}
        required
        placeholder="Dit emne..."
        onChange={handleChange}
      />
      <textarea
        name="besked"
        aria-label="besked"
        value={payload.besked}
        required
        placeholder="Din besked..."
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
