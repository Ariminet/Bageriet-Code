import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../../../API';
import './style.scss';
const AddIngredienser = ({ match }) => {
  const [payload, setPayload] = useState({
    ingrediens_titel: '',
    maengde: '',
    enhed_forkortet: '',
    enhed_navn: '',
  });
  const [redirect, setRedirect] = useState(false);

  const { ingrediens_titel, maengde, enhed_forkortet } = payload;

  const onChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (var k in payload) {
      formData.append(k, payload[k]);
    }
    try {
      const res = await API.postIng(
        `/produktingrediens/admin/${match.params.productId}`,
        formData,
        setRedirect
      );
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  if (redirect) {
    return <Redirect to="/admin/manage/produkter" />;
  }

  return (
    <form onSubmit={onSubmit} className="add-ingredienser-form">
      <input
        type="text"
        name="ingrediens_titel"
        aria-label="ingrediens_titel"
        value={ingrediens_titel}
        placeholder="Ingrediens navn"
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="maengde"
        aria-label="maengde"
        value={maengde}
        placeholder="Ingrediens mængde"
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="enhed_forkortet"
        aria-label="enhed_forkortet"
        value={enhed_forkortet}
        placeholder="Måle enhed for ingrediensen"
        onChange={onChange}
        required
      />

      <button type="submit">Create Ingrediens</button>
    </form>
  );
};

export default AddIngredienser;
