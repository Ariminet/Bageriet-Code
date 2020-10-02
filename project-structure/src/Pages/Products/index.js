import React, { useContext, useEffect, useState } from 'react';
import FilterBread from '../../Components/NewsestBread/FilterBread/index';
import { LoggedInContext } from '../../Context/LoggedInContext';
import './style.scss';

const Products = () => {
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
  }, [loggedin, userUndefined]);
  return (
    <div className="products">
      <h3>Vores elskede bagværk</h3>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
      <FilterBread />
    </div>
  );
};

export default Products;
