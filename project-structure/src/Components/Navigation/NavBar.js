import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import './NavBar.scss';
function NavBar() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  let headerbg = '';

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropClickHandler} />;
    headerbg = 'navBG';
  }
  return (
    <div className="navigation">
      <Toolbar
        drawerClickHandler={drawerToggleClickHandler}
        show={sideDrawerOpen}
        headerbg={headerbg}
      />
      <SideDrawer show={sideDrawerOpen} click={drawerToggleClickHandler} />
      {backdrop}
    </div>
  );
}

export default NavBar;
