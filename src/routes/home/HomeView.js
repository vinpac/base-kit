import React from 'react'
import Link from 'react-router/Link'
import Toolbar from '../../components/elements/Toolbar'
import Footer from '../../components/elements/Footer'

class HomeView extends React.Component {
  render() {
    return (
      <div className="view-home">
        <header className="header">
          <Toolbar/>
          <div className="container container-md text-xs-center content">
            <div className="row">
              <div className="col-xs-12">
                <h1>Home View</h1>
                <Link to="/about" className="text-accent text-weight-semibold">
                  Go to About <i className="fa fa-arrow-right sp-xs-left-1" />
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

export default HomeView
