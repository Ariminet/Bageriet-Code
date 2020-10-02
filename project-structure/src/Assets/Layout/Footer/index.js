import React from 'react';
import './style.scss';
const Footer = () => {
  return (
    <footer>
      <i className="fas fa-less-than"></i>
      <div className="info">
        <div className="info-text">
          <h2>bageriet</h2>
          <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de flest
            udgaver har gennemgået forandringer
          </p>
        </div>
      </div>
      <div className="copy-right">
        <p>
          Copyright <i className="far fa-copyright"></i> 2017 bageriet aps
        </p>
      </div>
    </footer>
  );
};

export default Footer;
