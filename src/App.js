import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./containers/list";
import 'typeface-roboto';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello there what
          <h1> ROBOFONT </h1>

        <List/>
        </header>
      </div>
    );
  }
}

export default App;
