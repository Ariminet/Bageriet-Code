import React, { useState } from 'react';
import ProductList from '../ProductList/index';
import './style.scss';
const FilterBread = () => {
  const [activeIndex, setActiveIndex] = useState('Morgenbrød');

  const handleClick = (e) => {
    setActiveIndex(e.target.name);
  };
  return (
    <div className="product-list-page">
      <div className="filter-container">
        <input
          type="button"
          name="Morgenbrød"
          value="RUNDSTYKKER"
          className={`filter ${activeIndex === 'Morgenbrød'}`}
          onClick={handleClick}
        />
        <input
          type="button"
          value="BAGUETTES"
          name="Baguettes"
          className={`filter ${activeIndex === 'Baguettes'}`}
          onClick={handleClick}
        />
        <input
          type="button"
          value="FRANSKBRØD"
          name="Grovbrød"
          className={`filter ${activeIndex === 'Grovbrød'}`}
          onClick={handleClick}
        />
        <input
          type="button"
          value="KAGER"
          name="Kager"
          className={`filter ${activeIndex === 'Kager'}`}
          onClick={handleClick}
        />
        <input
          type="button"
          value="RUGBRØD"
          name="Rugbrød"
          className={`filter ${activeIndex === 'Rugbrød'}`}
          onClick={handleClick}
        />
      </div>
      <ProductList searchValue={{ activeIndex, setActiveIndex }} />
    </div>
  );
};

export default FilterBread;
