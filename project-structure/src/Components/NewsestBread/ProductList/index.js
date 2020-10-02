import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../../../API';
import './style.scss';

const ProductList = ({ searchValue }) => {
  const imgPath = 'http://localhost:5033/images/';
  const { activeIndex } = searchValue;
  const [breads, setBreads] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    API.getItems('/produkter/', setBreads);
  }, []);
  useEffect(() => {
    setSearch(activeIndex);
  }, [activeIndex]);

  const breadList = breads
    .filter((bread) => bread.kategori.titel.includes(search))
    .map((item, index) => {
      return (
        <figure className="bread-container" key={index}>
          <img src={imgPath + item.image} alt={item.image} />
          <div className="comments padding-top-bot">
            {item.kommentar.length}
            <i className="far fa-comments"></i>
          </div>
          <h4>{item.titel}</h4>
          <p className="padding-top-bot">{item.teaser}</p>
          <NavLink to={`/produkter/${item._id}`}>se mere</NavLink>
        </figure>
      );
    });

  return (
    <div className="product-list-container">
      <section className="bread-list">
        {search === 'Morgenbrød' ? breadList : null}
        {search === 'Baguettes' ? breadList : null}
        {search === 'Grovbrød' ? breadList : null}
        {search === 'Kager' ? breadList : null}
        {search === 'Rugbrød' ? breadList : null}
      </section>
    </div>
  );
};

export default ProductList;
