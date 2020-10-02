import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../../API';
import './style.scss';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    API.getItems('/produkter', setList);
  }, []);

  return (
    <div className="search-bar-container">
      <form className="search-form">
        <input
          autoComplete="off"
          type="text"
          name="search"
          aria-label="search"
          className="search"
          placeholder="Søg Produkter her"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <button type="submit">SØG</button> */}
      </form>
      <ul className="search-list-container">
        {list
          .filter((item) => {
            if (!list) return true;
            if (search === '') return false;
            if (
              item.titel.toLowerCase().includes(search.toString().toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((item) => {
            return (
              <li key={item._id}>
                <NavLink to={`/produkter/${item._id}`}>{item.titel}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
