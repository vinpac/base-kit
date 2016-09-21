import React from 'react';

const SlideNextButton = ({ component:Component, children, className, ...props}) => {
  return (
    <Component className={`slide-next ${className}`} {...props}>
      { children }
    </Component>
  );
};

SlideNextButton.displayName = 'SlideNextButton';

SlideNextButton.defaultProps = {
  component: 'button'
}

export default SlideNextButton;
