import React from 'react';

const DropdownMenu = ({ component: Component, children, className, ...props}) => {
  return (
    <Component {...props} className={`dropdown-menu ${className || ""}`}>
      { children }
    </Component>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = {
  component: 'div'
}

export default DropdownMenu;
