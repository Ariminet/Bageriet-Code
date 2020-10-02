import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../../../API';
import './style.scss';

const BreadItem = () => {
  const [breads, setBreads] = useState([]);

  const imgPath = 'http://localhost:5033/images/';

  useEffect(() => {
    API.getItems('/produkter/antal/8', setBreads);
  }, []);

  return (
    <section className="new-bread-list">
      {breads.length
        ? breads.map((item, index) => {
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
          })
        : null}
    </section>
  );
};

export default BreadItem;
