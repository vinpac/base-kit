import React from 'react';

const DropdownButton = (props) => {
  const { children, className, onClick } = props
  return (
    <props.component className={className} onClick={onClick}>
      { children }
    </props.component>
  );
};

DropdownButton.displayName = 'DropdownButton';
DropdownButton.defaultProps = {
  component: 'button',
  className: 'dropdown-button'
}

export default DropdownButton;
