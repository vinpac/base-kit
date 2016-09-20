import React from 'react';

const DropdownButton = ({ component: Component, className, children, ...props}) => {
  return (
    <Component {...props} className={`dropdown-button ${className}`}>
      { children }
    </Component>
  );
};

DropdownButton.displayName = 'DropdownButton';
DropdownButton.defaultProps = {
  component: 'button'
}

export default DropdownButton;
