import React, { useContext, useEffect, useState } from 'react';
import './Toolbar.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { NavLink, useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../../Context/LoggedInContext';
import API from '../../../API';
import SearchBar from '../../SearchBar';
const Toolbar = ({ drawerClickHandler, show, headerbg }) => {
  const [loggedin, setLoggedin] = useContext(LoggedInContext);

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();

  let headerColor = 'toolbar_navigation ';
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        setScrolled(true);
      } else if (window.scrollY < 320) {
        setScrolled(false);
      }
    });

    if (
      location.pathname === '/' ||
      location.pathname === '/login' ||
      location.pathname === '/login/create' ||
      scrolled
    ) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [scrolled, location.pathname]);

  const onLogout = () => {
    API.getLogout('/login/logout');
    localStorage.removeItem('user');
    setLoggedin(false);
  };
  let navClass = { marginLeft: '50px' };

  let sideSearch = false;
  if (headerbg === 'navBG' && scrolled) {
    sideSearch = true;
  }
  if (headerbg === 'navBG' && showSearch) {
    sideSearch = true;
  }
  if (location.pathname !== '/' || scrolled) {
    headerColor = 'toolbar_navigation noslider';
  }
  return (
    <header className="toolbar">
      <nav className={headerColor + ' ' + headerbg}>
        <div className="toolbar_toggle-button">
          <DrawerToggleButton click={drawerClickHandler} show={show} />
        </div>

        <div className="spacer" />
        <div className="toolbar_logo">
          <NavLink to="/">bageriet</NavLink>
        </div>
        <div className="toolbar_navigation-items">
          <ul style={navClass}>
            <li>
              <NavLink activeClassName="current" exact to="/">
                FORSIDE
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/produkter">
                PRODUKTER
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="current" to="/kontakt">
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
                  LOGIN / CREATE
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
        </div>
        <div className="spacer" />
      </nav>

      {scrolled && !sideSearch ? <SearchBar /> : null}
      {showSearch && !sideSearch ? <SearchBar /> : null}
    </header>
  );
};

export default Toolbar;
