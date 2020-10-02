import React, { useEffect, useState } from 'react';
import API from '../../../API';
const ItemComp = (props) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const saveEvents = () => {
      return API.getItems(`/produkter/${props.match.params.id}`, setItem);
    };
    saveEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>{item.titel}</h1>
    </div>
  );
};

export default ItemComp;
