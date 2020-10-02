import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './style.scss';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h3>Kontakt os</h3>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </div>
      <div className="contact-body">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
