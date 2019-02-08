import React, { Component } from 'react';

import './App.css';

import 'typeface-roboto';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Test from "./containers/pageTest";
import Home from "./containers/home";
import Login from "./containers/loginPage";
import Posts from "./containers/posts";
import Register from "./containers/register";
import withAuth from './helpers/withAuth';
import Logout from "./containers/logout";
import Profile from "./containers/profile";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class App extends Component {



  constructor(props) {
    super(props);

    this.state = {
      app: []
    };
  }

  stateChanger(key,value) {
    this.setState(state => {
      return state.app[key] = value;
    });
  }


  bottomClick() {
    console.log("CLICKED BOTTOM");
  }

  render() {

    let helloText = "TEST DEFAULT VALUE"

    return (
      <div className="App">

        <Router>
      <div>
      
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="grow">
            MyApp
          </Typography>
      
            <Button className="menuButton" variant="contained" component={Link} to="/login" >Login</Button>
            <Button className="menuButton" variant="contained" component={Link} to="/register" >Register</Button>
            <Button className="menuButton" variant="contained" component={Link} to="/" >Home</Button>
            <Button className="menuButton" variant="contained" component={Link} to="/logout" >logout</Button>
            <Button className="menuButton" variant="contained" component={Link} to="/test" >Hidden</Button>
            <Button className="menuButton" variant="contained" component={Link} to="/profile" >Profile</Button>

            
        </Toolbar>
      </AppBar>
        <Route path={`/posts/:postId`}
          render={props => <Posts {...props} extra={helloText} appName={this.state.appName}/>}
        />
        <Route exact path="/" component={Home} app={this.state.app} stateChanger={this.stateChanger.bind(this)}/>

        <Route exact path="/register" component={Register} />
        <Route 
            path="/test" 
            render={props => <Test {...props} app={this.state.app} />} />
            <Route path="/login" render={props=> <Login {...props} app={this.state.app} stateChanger={this.stateChanger.bind(this)} />} />
            <Route path="/profile" render={props=> <Profile {...props} app={this.state.app} stateChanger={this.stateChanger.bind(this)} />} />
            <Route path="/logout" component={withAuth(Logout)} />
      </div>
    </Router>

    <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" onClick={this.bottomClick}icon={<LocationOnIcon />} />
      </BottomNavigation>
      </div>
    );
  }



}

export default App;

//<Route path="/secret" component={withAuth(Secret)} />