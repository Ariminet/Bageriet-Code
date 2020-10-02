import React, { useContext } from 'react';
import ImageMap from './ImageMap';
import './Slider.scss';
import { ImageContext } from '../../Context/ImageContext';

const Slider = () => {
  // Uses Context slides and function of setSlides from the useState in context
  // const [slides, setSlides] = useContext(ImageContext);
  const [slides] = useContext(ImageContext);

  // slides={slides} provides following component with props of passed slides
  return <ImageMap slides={slides} />;
};

export default Slider;
