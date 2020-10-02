import React, { useContext } from 'react';
import './SideDrawer.scss';
import { NavLink } from 'react-router-dom';
import { LoggedInContext } from '../../../Context/LoggedInContext';
import API from '../../../API';

const SideDrawer = ({ show, click }) => {
  const [loggedin, setLoggedin] = useContext(LoggedInContext);

  const onLogout = () => {
    setLoggedin(false);
    API.getLogout('/login/logout');
    localStorage.removeItem('user');
  };

  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink activeClassName="current" exact to="/" onClick={click}>
            FORSIDE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/produkter" onClick={click}>
            PRODUKTER
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/kontakt" onClick={click}>
            KONTAKT
          </NavLink>
        </li>
        <li>
          {loggedin ? (
            <NavLink activeClassName="current" to="/admin">
              ADMIN
            </NavLink>
          ) : (
            <NavLink activeClassName="current" to="/login">
              LOGIN
            </NavLink>
          )}
        </li>
        {loggedin ? (
          <li>
            <NavLink
              onClick={onLogout}
              to="/"
              style={{ background: 'none', border: 'none' }}
            >
              LOGOUT
            </NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default SideDrawer;
