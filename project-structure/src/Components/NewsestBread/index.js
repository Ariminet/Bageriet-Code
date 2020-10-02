import React from 'react';
import BreadItem from './BreadItem';
import './style.scss';
const NewestBread = () => {
  return (
    <div className="bread-news-container">
      <div className="bread-news-header">
        <h3>Nyeste bagværk</h3>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </div>
      <BreadItem />
    </div>
  );
};

export default NewestBread;
