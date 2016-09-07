import React from 'react'
import cx from 'classnames';

const Preloader = ({ light, medium }) => {
  return (
    <div className={cx("preloader", { "light": light, "medium": medium })}>
      <div className="preloader-item preloader-item-1" />
      <div className="preloader-item preloader-item-2" />
      <div className="preloader-item preloader-item-3" />
    </div>
  );
};

Preloader.displayName = 'Preloader';

export default Preloader;
