import React from 'react';
import NewsItem from './NewsItem';
import './style.scss';

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="latest-news-header">
        <h2>Vi skaber lækkert! brød</h2>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </div>
      <div className="top-three">
        <NewsItem />
      </div>
    </div>
  );
};

export default LatestNews;
