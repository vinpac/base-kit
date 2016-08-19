import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <header className="navbar-default navbar">
              <a href="" className="navbar-brand">Starter kit</a>
              <ul className="nav navbar-nav">
                <li><a className="nav-link active" href="">Features</a></li>
                <li><a className="nav-link" href="">Pricing</a></li>
                <li className="dropdown active">
                  <a className="nav-link" href="">More <i className="fa fa-angle-down"></i></a>
                  <div className="dropdown-menu">
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
                  </div>
                </li>
              </ul>
              <ul className="nav navbar-nav right">
                <li className="dropdown active">
                  <a className="nav-link" href="#">Notifications <i className="fa fa-angle-down"></i></a>
                  <div className="dropdown-menu notifications">
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
                      <a href="" className="muted-link">Older Notifications</a>
                      <a href="" className="muted-link right">Your stats</a>
                    </div>
                  </div>
                </li>
                <li><a className="nav-link" href="">Documentation</a></li>
                <li><a className="nav-link" href="">Support</a></li>
              </ul>
            </header>
            <div className="container-md text-center">
              <h2 className="margin-top-lg text-light">About Stripe</h2>
              <p className="text-md text-muted">Stripe is the best way to accept payments online and in mobile apps. We handle billions of dollars every year for forward-thinking businesses around the world.</p>
            </div>
          </div>
        </header>
        <div className="container section-padding">
          <div className="row">
            <div className="col-6">
              <article className="article">
                <div className="img-cover" />
                <div className="article-content">
                  <img src="https://stripe.com/img/v3/gallery/quote-logos/kickstarter.png" width="182" height="22" alt="Kickstarter"/>
                  <p className="margin-top-md">Kickstarter switched to Stripe to accelerate their support for international creators. Since partnering with Stripe to navigate international payment methods and compliance, Kickstarter’s phenomenally successful platform for creative projects is now available to creators in 18 countries.</p>
                </div>
              </article>
            </div>
            <div className="col-6">
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
              <div className="col-8">
                <p className="text-lg text-pre-muted">The on-demand economy gives the people what they want, now: rides, food, accommodation, and more. Your payments should meet the same high standards as your product experience: with just a tap, Stripe helps sellers on your marketplace get paid.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <article className="article-2 margin-top margin-bottom-lg"></article>
              </div>
            </div>
            <div className="row around-xs">
              <div className="col-5">
                <p className="text-muted">Payments for <span>market­places</span> used to be hard: accounting for seller earnings, making en-masse payouts happen (on time!), managing 1099-Ks and tax reporting, regulatory compliance. Marketplaces shouldn’t have to build all that from scratch, so we made Stripe Connect to provide all the tools you need to run a multi-sided marketplace.</p>
              </div>
              <div className="col-5">
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
