import React, { useEffect, useState } from 'react';

const ImageMap = ({ slides }) => {
  // curr is to keep track of what index of your state
  const [curr, setCurr] = useState(0);

  // goToNext Increments curr with 1 and if it hits max it resets to 0
  const goToNext = () => {
    const { length } = slides;
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  // goToNext Decrements curr with 1 and if it hits 0 it resets to Max
  const goToPrev = () => {
    const { length } = slides;
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  const nextDot = (i) => {
    setCurr(i);
  };

  // SetTimeout runs function goToNext once every 10 seconds
  useEffect(() => {
    setTimeout(goToNext, 10000);

    return function () {
      // Resets the current count on timer of 10seconds if any of these functions are run
      clearTimeout(goToNext, goToPrev, nextDot);
    };
  });

  // If slides isnt an array or the arrays length is 0 or less then return no data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {slides.map((slides, index) => (
        <div className={index === curr ? 'slide active' : 'slide'} key={index}>
          <div>
            <h1>{slides.title}</h1>
          </div>
          {index === curr && (
            <img className="image" alt={slides.title} src={slides.image} />
          )}
        </div>
      ))}
      <i className="fas fa-arrow-left fa-less-than" onClick={goToPrev} />
      <i className="fas fa-arrow-right fa-greater-than" onClick={goToNext} />
      <div className="dot-section">
        {slides.map((slides, index) => (
          <div
            className={index === curr ? 'dots active' : 'dots'}
            key={index}
            onClick={() => {
              nextDot(index);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ImageMap;
