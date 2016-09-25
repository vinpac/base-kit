import React from 'react'
import Link from 'react-router/Link'
import Toolbar from '../../components/elements/Toolbar'
import Footer from '../../components/elements/Footer'

class AboutView extends React.Component {
  render() {
    return (
      <div className="view-about">
        <header className="header">
          <Toolbar lightMode={true}/>
          <div className="container container-md text-xs-center content">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-light">About View</h1>
                <Link to="/" className="text-light text-weight-semibold">
                  <i className="fa fa-arrow-left mg-xs-right-1" /> Go to Home
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Footer />
      </div>
    );
  }
}

export default AboutView
