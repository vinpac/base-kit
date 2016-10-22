import React, { PropTypes } from 'react';

const Footer = ({ className }) => {
  return (
    <footer className="footer-default">
      <div className="footer-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="" className="card card-shadow  text-muted">
                <svg viewBox="0 0 130 130">
                  <path stroke="#159570" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M113.278 13.722c4.296 4.295 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0"></path>
                  <path fill="#159570" d="M111.55 109.037l-34.778-.014a7.46 7.46 0 0 1-7.457-7.455l-.023-59.62a7.41 7.41 0 0 1 1.118-3.916c.02-.03.038-.064.06-.095a7.463 7.463 0 0 1 1.71-1.873l15.98-15.96c3.34-3.34 8.61-3.482 11.772-.32l17.242 17.26c.94.94 1.48 2.124 1.63 3.348a7.43 7.43 0 0 1 .172 1.575l.023 59.62a7.445 7.445 0 0 1-7.45 7.45zm-17.44-84.7a9.45 9.45 0 0 0-9.45 9.45 9.448 9.448 0 0 0 18.898-.004c0-5.218-4.23-9.448-9.447-9.447z"></path>
                  <path fill="#74E4A2" d="M111.986 57.216c0 1.684-.578 3.23-1.54 4.464a9.473 9.473 0 0 1-1.26 1.567l-53.437 53.48a9.442 9.442 0 0 1-13.36 0L11.217 85.53c-3.688-3.692-3.688-9.678 0-13.37l53.438-53.48a9.39 9.39 0 0 1 4.51-2.508c.048-.01.094-.024.14-.034a9.48 9.48 0 0 1 3.216-.144l28.637.018c5.986 0 10.84 4.597 10.84 10.268l-.015 30.936zM99.4 28.583a6.673 6.673 0 0 0-9.445 0 6.69 6.69 0 0 0 0 9.453 6.676 6.676 0 0 0 9.446 0 6.69 6.69 0 0 0 0-9.453z"></path>
                  <path stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M34.103 75.93l33.28-33.28M42.95 84.308l37.98-37.98M51.8 93.156l28.577-28.58"></path>
                  <path stroke="#159570" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M97.722 29.278c-4.296-4.295-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0"></path>
                </svg>
                <h4 className="text-success">See our pricing <i className="fa fa-arrow-right" /></h4>
                <p>No setup fees, monthly fees, or hidden fees. With our predictable and transparent pricing, you’ll always know what you’ll pay.</p>
              </a>
            </div>
            <div className="col-md-6">
              <a href="" className="card card-shadow text-muted">
                <svg viewBox="0 0 130 130">
                  <path fill="#9251AC" d="M113 112H61.36c-2.224 0-4.466-1.574-5.27-3.277C54.005 104.313 46.457 102 37 102H5a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5h33c11.045 0 20 4.477 20 10v37h60v40a5 5 0 0 1-5 5z"></path>
                  <path fill="#F6A4EB" d="M121.993 93c0 6-12.363 10.997-27.384 10.997h-3.464v.01h-23.61c-1.823 0-5.27.637-6.82 1.627-.59.377-1.285.544-1.893.195a1.632 1.632 0 0 1-.817-1.416l.003-74.91c0-4.14 4.815-7.5 10.755-7.5h10.51c.075-.002.148-.008.224-.008h13.17c8.922 0 20.682-2.238 25.62-5.573 1.587-1.072 3.702-.09 3.702 1.82 0 0 .007 67.756 0 74.756z"></path>
                  <path stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M80.5 86.5h26m-26-10h26m-26-17h26m-26-10h26m-26-10h26"></path>
                  <path stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M68.992 78.007l3.516 3.494-3.516 3.496m0-43.99l3.516 3.495-3.516 3.496"></path>
                </svg>
                <h4 className="text-accent">Explore the docs  <i className="fa fa-arrow-right" /></h4>
                <p>Start building your integration and accept your first payment in minutes. Stripe libraries are available in every language from Ruby to Go.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-accent text-weight-light">Ready to get started</h2>
              <h2 className="text-weight-light">Get in touch, or create an account.</h2>
            </div>
            <div className="col-md-6">
              <div className="sp-lg-top-2 text-md-right sp-xs-top-2">
                <button className="btn btn-accent text-uppercase btn-shadow sp-md-bottom-1 sp-lg-bottom-none">Create strip account</button>
                <button className="btn btn-text-accent text-uppercase bg-light btn-shadow sp-xs-left-2">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-muted"/>
        <div className="container">
          <div className="row">
            <div className="col-lg sp-md-bottom-1 col-fill">
              <div className="pull-xs-left pull-lg-none sp-lg-bottom-1">
                <a  href="" className="text-weight-semibold text-accent">
                  <i className="fa fa-location-arrow sp-xs-right-2" />
                  United States
                </a>
              </div>
              <div className="pull-xs-left pull-lg-none sp-xs-left-3 sp-lg-left-none">
                <a href="" className="text-weight-semibold text-accent">
                  <i className="fa fa-comment sp-xs-right-2" />
                  English
                </a>
              </div>
            </div>
            <div className="col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Payments</h4>
              <ul className="nav nav-vertical">
                <li><a href="">Payments</a></li>
                <li><a href="">Subscriptions</a></li>
                <li><a href="">Connect</a></li>
                <li><a href="">Relay</a></li>
                <li><a href="">Atlas</a></li>
              </ul>
            </div>
            <div className="col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Developers</h4>
              <ul className="nav nav-vertical">
                <li><a href="">Documentation</a></li>
                <li><a href="">API reference</a></li>
                <li><a href="">API status</a></li>
                <li><a href="">Open source</a></li>
              </ul>
            </div>
            <div className="col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Company</h4>
              <ul className="nav nav-vertical">
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Press</a></li>
              </ul>
            </div>
            <div className="col-md sp-xs-top-2 sp-lg-top-none">
              <h4 className="footer-section-title">Resources</h4>
              <ul className="nav nav-vertical">
                <li><a href="">Support</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy & Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
