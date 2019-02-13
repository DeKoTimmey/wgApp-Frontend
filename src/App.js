import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/landing.js';
import Register from './components/auth/register.js';
import Login from './components/auth/login.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

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
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
