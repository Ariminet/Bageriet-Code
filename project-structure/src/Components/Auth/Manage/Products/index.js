import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductsItem from './ProductsItem';
import './style.scss';
const ManageProducts = () => {
  return (
    <div className="manage-products-container">
      <NavLink to="/admin/create/produkter">Create New</NavLink>
      <table>
        <thead>
          <tr>
            <td>Titel</td>
            <td>Teaser</td>
            <td>Beskrivelse</td>
            <td>Tilberedningstid</td>
            <td>Pris</td>
            <td>Antal</td>
            <td>Options</td>
          </tr>
        </thead>
        <ProductsItem />
      </table>
    </div>
  );
};

export default ManageProducts;
