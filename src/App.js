import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Home from './components/Home.react.js';
import './static/App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
