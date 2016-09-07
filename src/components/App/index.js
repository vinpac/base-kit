import React, { Component } from 'react'
import Modal from '../Modal'
import Preloader from '../elements/Preloader'
import Dropdown from '../Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownMenu from '../Dropdown/DropdownMenu'
import NavigationDrawer from '../NavigationDrawer'
import NavigationDrawerMenu from '../NavigationDrawer/NavigationDrawerMenu'
import NavigationDrawerButton from '../NavigationDrawer/NavigationDrawerButton'

export default class App extends Component {
  render() {
    return (
      <div>
        <Modal className="modal-post" ref="modal">
          <div className="modal-content">
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
              <button className="btn small btn-outline-default" onClick={() => this.refs.modal.toggle()}>Cancel</button>
              <button className="btn small btn-primary right"><Preloader medium light/></button>
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

              <h2 className="margin-top-lg text-light">Just Random Text</h2>
              <p className="text-md text-muted">Stripe is the best way to accept payments online and in mobile apps. We handle billions of dollars every year for forward-thinking businesses around the world.</p>
              <div className="row">
                <div className="col-md-4">
                  <select name="" id="" className="input input-lg">
                    <option value="">Chose</option>
                    <option value="">aa</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input type="text" className="input input-lg" placeholder="you@domain.com"/>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-lg btn-primary"
                    onClick={() => this.refs.modal.toggle() }
                    >
                    Open modal
                  </button>
                  <button className="btn btn-circle margin-left-md btn-primary">
                    <i className="fa fa-pencil" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container section-padding">
          <h1 className="text-light margin-bottom-lg">Forms</h1>
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-light text-muted margin-bottom-md">Normal input</h4>
              <input type="text" className="input" placeholder=".input"/>
            </div>
            <div className="col-md-4">
              <h4 className="text-light text-muted margin-bottom-md">Warn</h4>
              <div className="form-group form-group-warn">
                <div className="input-group">
                  <input type="text" className="input" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-outline-primary" type="button">Continue</button>
                  </span>
                </div>
                <span className="input-subtext">Email invalido</span>
              </div>
            </div>
          </div>
          <h1 className="text-light margin-top-lg margin-bottom-lg">Panels</h1>
          <div className="row">
            <div className="col-md-8">
              <div className="panel">
                <div className="panel-header">
                  <span className="text-upper text-semibold text-muted">Table of contents</span>
                </div>
                <div className="list">
                  <div className="list-item">
                    <div className="row">
                      <div className="col-xs-2">Content</div>
                      <div className="col-xs-10">
                        <ul className="nav nav-vertical">
                          <li><a href="#What-is-Stripe-Atlas">What is Stripe Atlas?</a></li>
                          <li><a href="#Who-should-use-Atlas">Who should use Atlas?</a></li>
                          <li><a href="#How-do-I-get-access">How do I get access?</a></li>
                          <li><a href="#Who-is-in-the-Stripe-Atlas-network">Who is in the Stripe Atlas network?</a></li>
                          <li><a href="#Can-I-use-Stripe-Atlas-if-I-m-based-in-a-country-Stripe-already-supports">Can I use Stripe Atlas if I’m based in a country Stripe already supports?</a></li>
                          <li><a href="#Can-I-use-Stripe-Atlas-if-I-m-based-in-Cuba">Can I use Stripe Atlas if I’m based in Cuba?</a></li>
                          <li><a href="#What-does-Atlas-cost">What does Atlas cost?</a></li>
                          <li><a href="#Are-there-any-additional-costs-I-should-be-aware-of">Are there any additional costs I should be aware of?</a></li>
                          <li><a href="#What-resources-will-I-receive-from-Amazon-Web-Services">What resources will I receive from Amazon Web Services?</a></li>
                          <li><a href="#Who-advises-Stripe-Atlas">Who advises Stripe Atlas?</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a href="" className="list-item list-item-action">
                    Teste <i className="fa fa-angle-right pull-right"></i>
                  </a>
                  <div className="list-item"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-success">
                <div className="panel-header">
                  <span className="text-upper">Yeah</span>
                </div>
                <div className="panel-body">
                  <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate repellendus cum provident ipsa vitae ipsam placeat quia sint, quo quibusdam illum dolores facere nobis hic optio officiis pariatur porro cumque?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-padding">
          <div className="row">
            <div className="col-lg-6">
              <article className="article">
                <div className="img-cover" />
                <div className="article-content">
                  <img src="https://stripe.com/img/v3/gallery/quote-logos/kickstarter.png" width="182" height="22" alt="Kickstarter"/>
                  <p className="margin-top-md">Kickstarter switched to Stripe to accelerate their support for international creators. Since partnering with Stripe to navigate international payment methods and compliance, Kickstarter’s phenomenally successful platform for creative projects is now available to creators in 18 countries.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-6">
              <div className="article-text-content">
                <p className="text-lg text-pre-muted">The best platforms own their user experience from end to end, including payments. Purchasing is woven into Twitter and Shopify. Kickstarter and Squarespace get their sellers paid seamlessly. These services work just right.</p>
                <p className="text-muted">It only takes a few minutes to start adding commerce to your platform. To manage payments, you can set up Stripe accounts for sellers from 25 countries (more coming soon). Or own the look and feel yourself and have sellers do everything within your platform.</p>
                <p className="text-muted">With Stripe, Squarespace went from a site-builder to a store-builder—growing its customer base by becoming more useful to more people. And thousands of other platforms around the world are bringing payments in-house with Stripe.</p>
                <hr className="hr-muted hr-lg"/>
                <ul className="nav nav-vertical">
                  <li><a href="">Bring payments to your platform</a></li>
                  <li><a href="">Create a ’Buy Now’ button for your app</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue section-padding">
          <div className="container">
            <div className="row around-xs margin-bottom">
              <div className="col-lg-8">
                <p className="text-lg text-pre-muted">The on-demand economy gives the people what they want, now: rides, food, accommodation, and more. Your payments should meet the same high standards as your product experience: with just a tap, Stripe helps sellers on your marketplace get paid.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <article className="article-2 margin-top margin-bottom-lg"></article>
              </div>
            </div>
            <div className="row around-xs">
              <div className="col-lg-5">
                <p className="text-muted">Payments for <span>market­places</span> used to be hard: accounting for seller earnings, making en-masse payouts happen (on time!), managing 1099-Ks and tax reporting, regulatory compliance. Marketplaces shouldn’t have to build all that from scratch, so we made Stripe Connect to provide all the tools you need to run a multi-sided marketplace.</p>
              </div>
              <div className="col-lg-5">
                <p className="text-muted">Integrating Connect means always having access to the state-of-the-art. In October 2015, we started piloting <a href="">instant debit card transfers</a>. And Connect is now available to marketplaces in <a href="">25 countries</a>.</p>
                <hr className="hr-muted hr-lg"/>
                <ul className="nav nav-vertical">
                  <li><a href="">Read more about Connect</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
