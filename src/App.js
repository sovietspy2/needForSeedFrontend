import React, { Component } from 'react';

import './App.css';

import 'typeface-roboto';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from "./containers/pageTest";
import Home from "./containers/home";
import Login from "./containers/loginPage";
import Posts from "./containers/posts";
import Register from "./containers/register";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appName: 'def'
    };
  }

  stateChanger(obj) {
    this.setState(obj);
  }


  render() {

    let helloText = "TEST DEFAULT VALUE"

    return (
      <div className="App">

        <Router>
      <div>
        <ul className="menu">
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/">HOme</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
              </li>
        </ul>

        <hr />
        <p>{this.state.appName}</p>
        <Route path={`/posts/:postId`}
          render={props => <Posts {...props} extra={helloText} appName={this.state.appName}/>}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route 
            path="/test" 
            render={props => <Test {...props} extra={helloText} />} />
            
            <Route path="/login" render={props=> <Login {...props} appName={this.state.appName} stateChanger={this.stateChanger.bind(this)} />} />
      </div>
    </Router>


      </div>
    );
  }
}

export default App;
