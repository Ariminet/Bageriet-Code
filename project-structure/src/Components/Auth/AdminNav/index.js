import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import API from '../../../API';
import { LoggedInContext } from '../../../Context/LoggedInContext';
import './style.scss';
const AdminNav = () => {
  const [isAuth] = useContext(LoggedInContext);
  const [redirect, setRedirect] = useState(false);
  const [reload, setReload] = useState(false);
  // eslint-disable-next-line
  const [payload, setPayload] = useState({
    brugernavn: '',
    fornavn: '',
    efternavn: '',
    email: '',
  });
  const [hasSub, setHasSub] = useState([]);
  let isSubbed = payload.email;
  let userID = JSON.parse(localStorage.getItem('user'));

  function filterByValue(array, value) {
    return array.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
  isSubbed = filterByValue(hasSub, payload.email);
  isSubbed = isSubbed.map((item) => item.email);

  useEffect(() => {
    API.getNewsLetter('/nyhedsbrevtilmelding/admin', setHasSub);
    setReload(false);
  }, [reload]);

  // useEffect(() => {
  //   API.setUser(`/bruger/admin/${userID}`, setPayload);
  // }, [userID]);
  console.log(payload.email);

  const onConfirm = () => {
    if (window.confirm("if you're sure you want to delete press OK")) {
      API.deleteUser(`/bruger/admin/${userID}`, setRedirect);
      isAuth();
    } else {
      console.log("You've Canceled Your Deletion");
    }
  };

  const cancelSub = () => {
    API.deleteSubscription(`/nyhedsbrevtilmelding/afmeld/${payload.email}`);
    setReload(true);
  };

  const SubscripeToNewsletter = () => {
    console.log(payload.email);
    let letter = { email: payload.email };
    // API.tilmeldNewsLetter('/nyhedsbrevtilmelding', payload.email);
    API.tilmeldNewsLetter('/nyhedsbrevtilmelding', letter);
    setReload(true);
  };

  if (redirect) {
    API.getLogout('/login/logout');

    return <Redirect to="/" />;
  }
  return (
    <div className="admin-nav">
      <div className="link-container">
        <div className="link-items">
          <NavLink to="/admin/edit/profil">Edit Profile</NavLink>
          <NavLink to="/admin/manage/produkter">Manage Products</NavLink>
          <NavLink to="/admin/manage/nyheder">Manage News</NavLink>
        </div>
        {isSubbed[0] === payload.email ? (
          <button onClick={cancelSub}>Cancel Subscribtion</button>
        ) : (
          <button onClick={SubscripeToNewsletter}>
            Subscribe to Newsletter
          </button>
        )}
        <button onClick={onConfirm}>Delete User</button>
      </div>
    </div>
  );
};

export default AdminNav;
