import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsItem from './NewsItem';
import './style.scss';
const ManageNews = () => {
  return (
    <div className="manage-news-container">
      <NavLink to="/admin/create/nyhed">Create New</NavLink>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Teaser</td>
            <td>News text</td>
            <td>Options</td>
          </tr>
        </thead>
        <NewsItem />
      </table>
    </div>
  );
};

export default ManageNews;
