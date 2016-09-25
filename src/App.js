import React, { Component } from 'react'
import Match from 'react-router/Match'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {routes.map((route, i) => (
          <Match
            key={i}
            pattern={route.pattern}
            component={route.action}
            exactly={route.exactly}
          />
        ))}
      </div>
    );
  }
}
