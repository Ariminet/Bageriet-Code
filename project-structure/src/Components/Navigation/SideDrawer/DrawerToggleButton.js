import React from 'react';
import './DrawerToggleButton.scss';
const DrawerToggleButton = ({ click, show }) => {
  let burgerClasses = 'toggle-button';
  let lineClasses = 'toggle-button_line';

  if (show) {
    burgerClasses = 'toggle-button open';
    lineClasses = 'toggle-button_line open';
  }
  return (
    <button className={burgerClasses} onClick={click}>
      <div className={lineClasses} />
      <div className={lineClasses} />
      <div className={lineClasses} />
    </button>
  );
};

export default DrawerToggleButton;
