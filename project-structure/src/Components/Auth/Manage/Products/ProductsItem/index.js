import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../../../../../API';

const ProductsItem = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    API.getData('/produkter', setData);
    setReload(false);
  }, [reload]);

  const onConfirm = (id) => {
    if (window.confirm("if you're sure you want to delete press OK")) {
      API.deleteData(`/produkter/admin/${id}`);
      setReload(true);
    } else {
      console.log("You've Canceled Your Deletion");
    }
  };

  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <tbody>
      {data.length
        ? data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.titel}</td>
                <td>{item.teaser}</td>
                <td
                  dangerouslySetInnerHTML={createMarkup(item.beskrivelse)}
                ></td>
                <td>{item.tilberedningstid}</td>
                <td>{item.pris}</td>
                <td>{item.antal}</td>
                <td>
                  <button
                    onClick={() => {
                      onConfirm(item._id);
                    }}
                  >
                    Delete
                  </button>
                  <NavLink
                    to={`/admin/manage/produkter/ingredienser/${item._id}`}
                  >
                    Add Ingrediense
                  </NavLink>
                  <NavLink to={`/admin/manage/produkter/${item._id}`}>
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })
        : null}
    </tbody>
  );
};

export default ProductsItem;
