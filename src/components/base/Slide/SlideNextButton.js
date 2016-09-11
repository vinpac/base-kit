import React from 'react';

const SlideNextButton = (props) => {
  const { component, children, ...parsedProps} = props;
  return (
    <props.component className="slide-next" {...parsedProps}>
      { children }
    </props.component>
  );
};

SlideNextButton.displayName = 'SlideNextButton';

SlideNextButton.defaultProps = {
  component: 'button'
}

export default SlideNextButton;
