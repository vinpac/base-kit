import React from 'react';

const NavigationDrawerMenu = ({ children }) => {
  return (
    <div className="nav-drawer-menu">
      { children }
    </div>
  );
};

NavigationDrawerMenu.displayName = 'NavigationDrawerMenu';

export default NavigationDrawerMenu;
