import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LightsSettings from './lightsSettings/lightsSettings.js';
import Calendar from './calendar/calendar.js';
import Todos from './todos/todos.js';
import Chat from './chat/chat.js';
import MenuAppBar from './menu/menuBar.js';
import { Provider } from "react-redux";
import store from "../store.js";
import PrivateRoute from "./private-route/privateRoute";
import Dashboard from "./dashboard/dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <Provider store={store}>
    <MenuAppBar />
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/lights" component={LightsSettings} />
        <PrivateRoute exact path="/Calendar" component={Calendar} />
        <PrivateRoute exact path="/Todos" component={Todos} />
        <PrivateRoute exact path="/Chat" component={Chat} />
      </Switch>
  </Router>
    </Provider>
    );
  }
}

export default Container;
