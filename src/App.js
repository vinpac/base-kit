import React, { Component } from 'react'

// Base Components
import Modal from './components/base/Modal'
import Dropdown, { DropdownMenu, DropdownButton } from './components/base/Dropdown'


// Elements
import Preloader from './components/elements/Preloader'
import Footer from './components/elements/Footer'
import Demonstration from './components/demo/Demonstration'

export default class App extends Component {
  render() {
    return (
      <div className="view-home">
        <Modal className="modal-post scale" ref="modal">
          <div className="modal-content">
            <div className="modal-card">
              <div className="modal-post-header">
                <button className="btn btn-transparent text-semibold text-sm">vini175pa <i className="fa fa-angle-down mg-left-sm" /></button>
                <button className="btn btn-transparent text-muted right"><i className="fa fa-cog" /></button>
              </div>
              <img src="https://67.media.tumblr.com/2af43f6ba6e3da9390722394e68c16cc/tumblr_oc5czpi6i51qz7t0xo1_540.jpg" className="fill-width" alt=""/>
              <div className="modal-body mg-top">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam, incidunt veritatis quia eaque nostrum dolor adipisci illo quibusdam placeat alias cupiditate debitis sint aut aperiam, expedita consequatur quasi deserunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error veniam, incidunt veritatis quia eaque nostrum dolor adipisci illo quibusdam placeat alias cupiditate debitis sint aut aperiam, expedita consequatur quasi deserunt.</p>
              </div>
              <div className="modal-footer">
                <button className="btn card-link small btn-outline-default" onClick={() => this.refs.modal.toggle()}>Cancel</button>
                <button className="btn card-link small btn-primary right"><Preloader medium light/></button>
              </div>
            </div>
          </div>
        </Modal>
        <header className="header">
          <div className="container">
            <header className="navbar-light navbar">
              <a href="" className="navbar-brand">Starter kit</a>
              <ul className="nav navbar-nav navbar-right hidden-md-up">
              <Dropdown ref="fullDropdown" component="li" className="full-dropdown" hasTransition={true} open>
                  <DropdownButton
                    component="a"
                    className="nav-link dropdown-button"
                    href=""
                  >
                    <i className="fa fa-bars"></i>
                  </DropdownButton>
                  <DropdownMenu>
                    <button
                      className="btn btn-accent-text dropdown-full-close"
                      onClick={() => this.refs.fullDropdown.close()}
                    >
                      <i className="fa fa-remove"></i>
                    </button>
                    <div className="dropdown-header">
                      <h4 className="dropdown-title">Teste</h4>
                    </div>
                    <div className="dropdown-item">
                      <div className="row mg-xs-bottom-1">
                        <div className="col-sm-6 mg-xs-bottom-1 mg-sm-bottom-none">
                          <a href="" className="text-accent">Pricing</a>
                        </div>
                        <div className="col-sm-6">
                          <a href="" className="text-accent">About Stripe</a>
                        </div>
                      </div>
                      <div className="row mg-xs-bottom-1">
                        <div className="col-sm-6 mg-xs-bottom-1 mg-sm-bottom-none">
                          <a href="" className="text-accent">Customers</a>
                        </div>
                        <div className="col-sm-6">
                          <a href="" className="text-accent">Jobs</a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 mg-xs-bottom-1 mg-sm-bottom-none">
                          <a href="" className="text-accent">Documentation</a>
                        </div>
                        <div className="col-sm-6">
                          <a href="" className="text-accent">Blog</a>
                        </div>
                      </div>
                    </div>
                    <a href="" className="dropdown-footer mg-xs-top-1 text-accent text-weight-semibold">
                      Go to Header <i className="fa fa-arrow-right"></i>
                    </a>
                  </DropdownMenu>
                </Dropdown>
              </ul>
              <ul className="nav navbar-nav hidden-sm-down">
                <li><a className="nav-link active" href="">Features</a></li>
                <li><a className="nav-link" href="">Pricing</a></li>
                <Dropdown component="li" className="dropdown-animation" hasTransition={true}>
                  <DropdownButton
                    component="a"
                    className="nav-link dropdown-button"
                    href=""
                  >
                    More <i className="fa fa-angle-down" />
                  </DropdownButton>
                  <DropdownMenu>
                    <a href="" className="dropdown-link">Create Page</a>
                    <a href="" className="dropdown-link">Manage Pages</a>
                    <div className="dropdown-separator" />
                    <a href="" className="dropdown-link">Create Group</a>
                    <a href="" className="dropdown-link">New groups</a>
                    <div className="dropdown-separator" />
                    <a href="" className="dropdown-link">Create ads</a>
                    <a href="" className="dropdown-link">Advertising on Starter Kit</a>
                    <div className="dropdown-separator" />
                    <a href="" className="dropdown-link">Blog</a>
                    <a href="" className="dropdown-link">About</a>
                    <a href="" className="dropdown-link">Jobs</a>
                  </DropdownMenu>
                </Dropdown>
              </ul>
              <ul className="nav navbar-nav navbar-right hidden-sm-down">
                <li><a className="nav-link" href="">Documentation</a></li>
                <li><a className="nav-link" href="">Support</a></li>
              </ul>
            </header>
            <div className="container-md text-xs-center">

              <h2 className="mg-xs-top-3 text-light text-weight-light">Just Random Text</h2>
              <p className="text-md text-muted text-light">Stripe is the best way to accept payments online and in mobile apps. We handle billions of dollars every year for forward-thinking businesses around the world.</p>
              <button className="btn btn-success btn-shadow text-uppercase mg-xs-right-2 mg-xs-bottom-1 mg-sm-bottom-none">Create stripe account</button>
              <button className="btn btn-accent-text text-uppercase btn-shadow bg-light">Create Account</button>
            </div>
          </div>
        </header>
        <Demonstration />
        <div className="container section-padding">
          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <h5 className="text-uppercase text-success text-weight-semibold">Always improving</h5>
              <p className="text-muted">Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.</p>
              <a href="" className="mg-xs-top-1 text-accent text-weight-semibold">Lear about Stripe's products <i className="fa fa-arrow-right mg-xs-left-1"></i></a>
            </div>
            <div className="col-lg-5 mg-xs-top-2 mg-lg-top-none">
              <h5 className="text-uppercase text-success text-weight-semibold">Always improving</h5>
              <p className="text-muted">Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.</p>
              <a href="" className="mg-xs-top-1 text-accent text-weight-semibold">Lear about Stripe's products <i className="fa fa-arrow-right mg-xs-left-1"></i></a>
            </div>
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
    );
  }
}
