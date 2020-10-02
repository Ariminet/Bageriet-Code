import React, { createContext, useState } from 'react';
// Create the usability for context
export const ImageContext = createContext();

// Context Data it has to provide and how
export const ImageProvider = (props) => {
  // DATA  ( useEffect to get from a API)
  const [slides, setSlides] = useState([
    {
      title: 'Vi elsker at lave brød',
      image: 'http://localhost:5033/images/slide1.jpg',
    },
    {
      title: 'Vi elsker at lave brød',
      image: 'http://localhost:5033/images/slide2.jpg',
    },
    {
      title: 'Vi elsker at lave brød',
      image: 'http://localhost:5033/images/slide3.jpg',
    },
  ]);

  // useEffect(() => {
  //   ApiCall.get('url').then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // Return renders DataContext.Provider and the value is Array to get the functionality of both the state and set of the state
  return (
    <ImageContext.Provider value={[slides, setSlides]}>
      {props.children}
    </ImageContext.Provider>
  );
};
