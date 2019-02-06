import React, { Component } from 'react';

import './App.css';

import 'typeface-roboto';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from "./containers/pageTest";
import Home from "./containers/home";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
      <div>
        <ul>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/">HOme</Link>
            </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </div>
    </Router>


      </div>
    );
  }
}

export default App;
