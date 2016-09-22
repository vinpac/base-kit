import React, { Component } from 'react'
import Modal from '../base/Modal'
import Preloader from '../elements/Preloader'
import Dropdown from '../base/Dropdown'
import DropdownButton from '../base/Dropdown/DropdownButton'
import DropdownMenu from '../base/Dropdown/DropdownMenu'
import NavigationDrawer from '../base/NavigationDrawer'
import NavigationDrawerMenu from '../base/NavigationDrawer/NavigationDrawerMenu'
import NavigationDrawerButton from '../base/NavigationDrawer/NavigationDrawerButton'
import Slide from '../base/Slide'
import cx from 'classnames'
import SlideBody from '../base/Slide/SlideBody'
import SlideNextButton from '../base/Slide/SlideNextButton'
import SlidePreviousButton from '../base/Slide/SlidePreviousButton'

export default class App extends Component {
  render() {
    return (
      <div className="view-home">
        <Modal className="modal-post scale" ref="modal">
          <div className="modal-content">
            <div className="modal-card">
              <div className="modal-post-header">
                <button className="btn btn-transparent text-semibold text-sm">vini175pa <i className="fa fa-angle-down margin-left-sm" /></button>
                <button className="btn btn-transparent text-muted right"><i className="fa fa-cog" /></button>
              </div>
              <img src="https://67.media.tumblr.com/2af43f6ba6e3da9390722394e68c16cc/tumblr_oc5czpi6i51qz7t0xo1_540.jpg" className="fill-width" alt=""/>
              <div className="modal-body margin-top">
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
            <header className="navbar-default navbar">
              <NavigationDrawer right ref="a" open>
                <a href="" className="navbar-brand">Starter kit</a>
                <ul className="nav navbar-nav navbar-right hidden-md-up">
                  <Dropdown component="li">
                      <DropdownButton
                        component="a"
                        className="nav-link dropdown-button"
                        href=""
                      >
                        Notifications <i className="fa fa-angle-down" />
                      </DropdownButton>
                      <div className="dropdown-menu notifications">
                        <div className="dropdown-item medium">
                          <span className="text-muted text-semibold">Notifications</span>
                        </div>
                        <a href="" className="dropdown-item notification medium">
                          <img src="https://66.media.tumblr.com/avatar_028a20ac89e4_64.png" className="img-circle" alt=""/>
                          <p><b className="text-semibold">John Doe</b> started following you</p>
                          <span className="text-muted">10 min ago</span>
                        </a>
                        <a href="" className="dropdown-item notification medium">
                          <img src="https://67.media.tumblr.com/avatar_ea9f86b1c4e4_64.png" className="img-circle" alt=""/>
                          <p><b className="text-semibold">Art Snack Blog</b> started following you</p>
                          <span className="text-muted">10 min ago</span>
                        </a>
                        <div className="dropdown-item large">
                          <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reprehenderit quam in, eaque earum cupiditate quos autem voluptas facere nam laudantium tempora saepe commodi esse dolorum, ad nihil, repellat iusto.</p>
                        </div>
                        <div className="dropdown-item medium">
                          <a href="" className="link-muted">Older Notifications</a>
                          <a href="" className="link-muted right">Your stats</a>
                        </div>
                      </div>
                    </Dropdown>
                  <li>
                    <NavigationDrawerButton getDrawer={() => this.refs.a}>
                      <i className="fa fa-bars" />
                    </NavigationDrawerButton>
                  </li>
                </ul>
                <NavigationDrawerMenu>
                  <ul className="nav navbar-nav collapse">
                    <li><a className="nav-link active" href="">Features</a></li>
                    <li><a className="nav-link" href="">Pricing</a></li>
                    <Dropdown component="li">
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
                  <ul className="nav navbar-nav navbar-right collapse">
                    <li><a className="nav-link" href="">Documentation</a></li>
                    <li><a className="nav-link" href="">Support</a></li>
                  </ul>
                </NavigationDrawerMenu>
              </NavigationDrawer>
            </header>
            <div className="container-md text-center">

              <h2 className="margin-top-lg text-weight-light">Just Random Text</h2>
              <p className="text-md text-muted">Stripe is the best way to accept payments online and in mobile apps. We handle billions of dollars every year for forward-thinking businesses around the world.</p>
              <button className="btn btn-accent text-uppercase">Create stripe account</button>
            </div>
          </div>
        </header>
        <div className="container section-padding">
          <h1 className="text-weight-light margin-bottom-lg">Forms</h1>
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-weight-light text-muted margin-bottom-md">Normal input</h4>
              <input type="text" className="input" placeholder=".input"/>
            </div>
            <div className="col-md-4">
              <h4 className="text-weight-light text-muted margin-bottom-md">Input group</h4>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    { window.location.host }/
                  </span>
                  <input type="text" className="input" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-outline-primary" type="button">Continue</button>
                  </span>
                </div>
                <span className="input-subtext">Email invalido</span>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="text-weight-light text-muted margin-bottom-md">Input group</h4>
              <div className="input-group input-group-2">
                <input type="text" className="input" placeholder="you@domain.com"/>
                <div className="input-group-btn">
                  <button className="btn text-uppercase">Notify me</button>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-weight-light text-muted margin-bottom-md">Checkbox and Radio</h4>
              <label>
                <input type="checkbox" className="input margin-right-md"/>
                <span>Teste</span>
              </label>
              <label className="margin-left">
                <input type="checkbox" className="input margin-right-md"/>
                <span>Teste</span>
              </label>
              <div className="margin-top-sm">
                <label className="margin-right">
                  <input name="teste" type="radio" className="input margin-right-md"/>
                  <span>Teste</span>
                </label>
                <label className="margin-right">
                  <input name="teste" type="radio" className="input margin-right-md"/>
                  <span>Teste</span>
                </label>
              </div>
            </div>
          </div>
          <h1 className="text-weight-light margin-top-lg margin-bottom-lg">Slide</h1>
          <div className="row">
            <div className="col-md-12">
              <Slide className="slide-absolute">
                <SlidePreviousButton>
                  <i className="fa fa-angle-left" />
                </SlidePreviousButton>
                <SlideBody>
                {
                  [...Array(15).keys()].map(i => {
                    return (
                      <div
                        key={i}
                        className={cx("slide-item", {
                        'bg-primary': i % 3 === 0,
                        'bg-success': i % 3 === 1,
                        'bg-warning': i % 3 === 2,
                      })}>
                        { i }
                      </div>
                    )
                  })
                }
                </SlideBody>
                <SlideNextButton>
                  <i className="fa fa-angle-right" />
                </SlideNextButton>
              </Slide>
            </div>
          </div>
          <h1 className="text-weight-light margin-top-lg margin-bottom-lg">Cards</h1>
          <div className="row margin-bottom-lg">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-block">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="list">
                  <div className="list-item">
                    Teste
                  </div>
                  <a className="list-item list-item-action">
                    Teste
                  </a>
                  <div className="list-item">
                    Teste
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary card-link">Another link</a>
                <a href="#" className="card-link">Card link</a>
              </div>
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-block">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="list">
                  <div className="list-item">
                    Teste
                  </div>
                  <div className="list-item">
                    Teste
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
