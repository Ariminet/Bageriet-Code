import React, { useContext, useEffect, useState } from 'react';
import API from '../../../API';
import Pagination from '../../Pagination/index';
import './style.scss';
import { LoggedInContext } from '../../../Context/LoggedInContext';
import { NavLink } from 'react-router-dom';
import CommentList from './CommentList';
import PostComment from './PostComment/index';

const ProductDetail = (props) => {
  const [loggedin] = useContext(LoggedInContext);
  const [breadDetail, setBreadDetail] = useState({});
  const [reload, setReload] = useState();
  const [ingredienser, setIngredienser] = useState([]);
  const [ifUser, setIfUser] = useState();
  const [payload, setPayload] = useState({ kommentar: '' });
  const { titel, kategori, image, beskrivelse, kommentar } = breadDetail;
  const imgPath = 'http://localhost:5033/images/';
  let showComments = [];
  useEffect(() => {
    API.getItemById(
      `/produkter/${props.match.params.productId}`,
      setBreadDetail
    );

    setIfUser(JSON.parse(localStorage.getItem('user')));
    setReload(false);
  }, [reload, props.match.params.productId]);
  useEffect(() => {
    setIngredienser(breadDetail.ingredienser);
  }, [breadDetail]);
  function createMarkup(text) {
    return { __html: text };
  }

  const recipeList = ingredienser ? (
    ingredienser.map((item) => {
      return (
        <li key={item._id}>
          {item.maengde + item.enhed_forkortet + '. ' + item.ingrediens_titel}
        </li>
      );
    })
  ) : (
    <div>
      <h1>No Events</h1>
    </div>
  );

  const onLike = () => {
    API.postLike(`/produkter/likes/${props.match.params.productId}`);
    setReload(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  let currentComments = [];
  if (kommentar) {
    showComments = kommentar;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentComments = showComments.slice(indexOfFirstPost, indexOfLastPost);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="bread-detail-page">
      <div className="breadcrumbs">
        <NavLink to="/produkter">Produkter</NavLink>{' '}
        {kategori ? (
          <NavLink to={`/produkter`}>{kategori.titel}</NavLink>
        ) : null}
      </div>
      <div className="bread-detail-container">
        <div className="bread-left">
          <div className="bread-header">
            <h2>{titel}</h2>
            {kategori !== undefined ? <h3>{kategori.titel}</h3> : null}
          </div>

          <div className="bread-detail clearfix">
            <img src={imgPath + image} alt={image} />
            <p dangerouslySetInnerHTML={createMarkup(beskrivelse)}></p>
          </div>
        </div>

        {loggedin ? (
          <button onClick={onLike}>
            Like! <i className="far fa-heart"></i> {breadDetail.likes}
          </button>
        ) : (
          <button>
            <NavLink to="/login"> Login to Like </NavLink>
          </button>
        )}
        <div className="recipe-list">
          <h4>Ingredienser</h4>
          <ul>{recipeList}</ul>
        </div>
      </div>
      <div className="comment-container">
        <div className="comment-header">
          <h5>kommentar</h5>
          <div className="spacer"></div>
          <div className="amount-of-comments">
            {kommentar ? kommentar.length : null}
            <i className="far fa-comments"></i>
          </div>
        </div>

        {loggedin ? (
          <PostComment
            produktid={props.match.params.productId}
            setReload={setReload}
            setPayload={setPayload}
            kommentaren={payload.kommentaren}
            payload={payload}
          />
        ) : (
          <div className="login-input-container">
            <NavLink to="/login">Login to comment</NavLink>
          </div>
        )}

        <CommentList
          currentComments={currentComments}
          setReload={setReload}
          ifUser={ifUser}
          produktid={props.match.params.productId}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={showComments.length}
          paginate={paginate}
          currentComments={currentComments}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
