import React from 'react'
import Link from 'react-router/Link'

const Footer = () => {
  return (
    <footer className="footer-default">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg sp-md-bottom-1 col-fill">
              <div className="pull-xs-left pull-lg-none sp-lg-bottom-1">
                <a  target="_blank" href="//github.com/vinpac/base-kit/issues" className="text-weight-semibold text-accent">
                  <i className="fa fa-location-arrow sp-xs-right-2" />
                  Issues
                </a>
              </div>
              <div className="pull-xs-left pull-lg-none sp-xs-left-3 sp-lg-left-none">
                <a target="_blank" href="//github.com/vinpac/base-kit" className="text-weight-semibold text-accent">
                  <i className="fa fa-github sp-xs-right-2" />
                  Github
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Guides</h4>
              <ul className="nav nav-vertical">
                <li><a target="_blank" href="//vinpac.github.io/base-kit/">Example of use</a></li>
                <li><a target="_blank" href="//github.com/airbnb/javascript">Javascript</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Developers</h4>
              <ul className="nav nav-vertical">
                <li><a target="_blank" href="//github.com/vinpac">@vinpac</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Cool Stuff</h4>
              <ul className="nav nav-vertical">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Resources</h4>
              <ul className="nav nav-vertical">
                <li><a target="_blank" href="//github.com/twbs/bootstrap">Bootstrap</a></li>
                <li><a target="_blank" href="//github.com/facebookincubator/create-react-app">Create React App</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
