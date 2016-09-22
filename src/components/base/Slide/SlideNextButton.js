import React from 'react'
import cx from 'classnames'

const SlideNextButton = ({ component:Component, reachedCorner, children, className, ...props}) => {
  return (
    <Component className={cx('slide-next', { 'slide-on-corner': reachedCorner }, className)} {...props}>
      { children }
    </Component>
  );
};

SlideNextButton.displayName = 'SlideNextButton';

SlideNextButton.defaultProps = {
  component: 'button'
}

export default SlideNextButton;
