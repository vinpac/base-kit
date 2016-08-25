import React from 'react';

const DropdownMenu = (props) => {
  const { children, className, onClick } = props
  return (
    <props.component className={className} onClick={onClick}>
      { children }
    </props.component>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = {
  component: 'div',
  className: 'dropdown-menu'
}

export default DropdownMenu;
