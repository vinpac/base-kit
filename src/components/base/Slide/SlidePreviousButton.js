import React from 'react';

const SlidePreviousButton = (props) => {
  const { component, children, ...parsedProps} = props;
  return (
    <props.component className="slide-previous" {...parsedProps}>
      { children }
    </props.component>
  );
};

SlidePreviousButton.displayName = 'SlidePreviousButton';
SlidePreviousButton.defaultProps = {
  component: 'button'
}

export default SlidePreviousButton;
