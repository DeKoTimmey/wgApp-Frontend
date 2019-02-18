import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/landing.js';
import Register from './components/auth/register.js';
import Login from './components/auth/login.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/private-route/privateRoute";
import Dashboard from "./components/dashboard/dashboard";
import Container from "./components/container";

import LightsSettings from './components/lightsSettings/lightsSettings.js';
import Calendar from './components/calendar/calendar.js';
import Todos from './components/todos/todos.js';
import Chat from './components/chat/chat.js';

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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App" >
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Container} />
                  <PrivateRoute exact path="/lights" component={LightsSettings} />
                  <PrivateRoute exact path="/Calendar" component={Calendar} />
                  <PrivateRoute exact path="/Todos" component={Todos} />
                  <PrivateRoute exact path="/Chat" component={Chat} />
                </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
