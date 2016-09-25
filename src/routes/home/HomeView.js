import React from 'react'
import Link from 'react-router/Link'
import Toolbar from '../../components/elements/Toolbar'
import Footer from '../../components/elements/Footer'

class HomeView extends React.Component {
  render() {
    return (
      <div className="view-home">
        <Toolbar />
        <div className="content container text-xs-center">
          <h1>Home View</h1>
          <Link to="/about" className="text-accent text-weight-semibold">
            Go to About <i className="fa fa-arrow-right mg-xs-left-1" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeView
