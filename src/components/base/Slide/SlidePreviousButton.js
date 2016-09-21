import React from 'react';

const SlidePreviousButton = ({ component:Component, className, children, ...props}) => {
  return (
    <Component className={`slide-previous ${className}`} {...props}>
      { children }
    </Component>
  );
};

SlidePreviousButton.displayName = 'SlidePreviousButton';

SlidePreviousButton.defaultProps = {
  component: 'button'
}

export default SlidePreviousButton;
