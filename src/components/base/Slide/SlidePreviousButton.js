import React from 'react';
import cx from 'classnames'

const SlidePreviousButton = ({ component:Component, reachedCorner, className, children, ...props}) => {
  return (
    <Component className={cx('slide-previous', { 'slide-on-corner': reachedCorner }, className)} {...props}>
      { children }
    </Component>
  );
};

SlidePreviousButton.displayName = 'SlidePreviousButton';

SlidePreviousButton.defaultProps = {
  component: 'button'
}

export default SlidePreviousButton;
