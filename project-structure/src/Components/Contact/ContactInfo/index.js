import React from 'react';
import './style.scss';
const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <p>
        addresse: <span>Øster uttrupvej 1 9200 aalborg</span>
      </p>
      <p>
        telefon: <a href="tel:+4525269540">+45 25 26 95 40</a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.215714792397!2d9.965507415981204!3d57.04784708091952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b69856edb3%3A0x565e91c76e25f34b!2s%C3%98ster%20Uttrup%20Vej%201%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1601422747404!5m2!1sda!2sdk"
        width="500"
        height="385"
        frameBorder="0"
        title="googlemaps"
        style={{ border: '0' }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default ContactInfo;
