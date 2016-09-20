import React from 'react';
import cx from 'classnames';

const DropdownMenu = ({ component: Component, className, children, ...props}) => {
  return (
    <Component {...props} className={`dropdown-menu ${className}`}>
      { children }
    </Component>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = {
  component: 'div'
}

export default DropdownMenu;
