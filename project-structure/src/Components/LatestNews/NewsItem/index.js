import React, { useEffect, useState } from 'react';
import API from '../../../API';

const NewsItem = () => {
  const [news, setNews] = useState([]);
  const imgPath = 'http://localhost:5033/images/';
  useEffect(() => {
    API.getItems('/nyheder/antal/3', setNews);
  }, []);
  return (
    <section>
      {news.length
        ? news.map((item, index) => {
            return (
              <div className="news-container" key={index}>
                <img src={imgPath + item.image} alt={item.image} />
                <h3>{item.titel}</h3>
                <p>{item.teaser}</p>
              </div>
            );
          })
        : null}
    </section>
  );
};

export default NewsItem;
