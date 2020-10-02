import React, { useContext, useEffect, useState } from 'react';
import LatestNews from '../../Components/LatestNews';
import NewestBread from '../../Components/NewsestBread';
import NewsLetter from '../../Components/NewsLetter';

import Slider from '../../Components/Slider/Slider';
import { LoggedInContext } from '../../Context/LoggedInContext';

const Home = () => {
  const [loggedin] = useContext(LoggedInContext);
  const [userUndefined, setUserUndefined] = useState(false);
  useEffect(() => {
    if (loggedin === false) {
      localStorage.removeItem('user');
    }

    setUserUndefined(localStorage.getItem('user'));
  }, [loggedin]);
  useEffect(() => {
    if (userUndefined === undefined) {
      localStorage.removeItem('user');
    }
  }, [userUndefined]);

  return (
    <div>
      <Slider />
      <LatestNews />
      <NewsLetter />
      <NewestBread />
    </div>
  );
};

export default Home;
