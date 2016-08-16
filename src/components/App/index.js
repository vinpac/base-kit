import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <header className="navbar-default navbar">
              <a href="" className="navbar-brand">Starter Kit</a>
              <ul className="nav navbar-nav">
                <li><a href="" className="active">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">More</a></li>
              </ul>
              <ul className="nav navbar-nav right">
                <li><a href="">Documentation</a></li>
                <li><a href="">Support</a></li>
                <li><button className="btn btn-outline-primary navbar-btn">Entrar</button></li>
              </ul>
            </header>
          </div>
        </header>
      </div>
    );
  }
}
