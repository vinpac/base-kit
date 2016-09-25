import React from 'react'
import cx from 'classnames'
import Link from 'react-router/Link'

const Toolbar = ({ lightMode }) => {
  return (
    <div className="toolbar">
      <div className="container">
        <div className={cx("navbar", { 'navbar-default': !lightMode, 'navbar-light': lightMode })}>
          <Link to="/" className="navbar-brand">Base kit</Link>
          <ul className="nav navbar-nav navbar-right">
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><a className="nav-link" href="//github.com/vinpac/base-kit">Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Toolbar.displayName = 'Toolbar';

export default Toolbar;
