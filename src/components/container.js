import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import LightsSettings from './lightsSettings/lightsSettings.js';
import Calendar from './calendar/calendar.js';
import Todos from './todos/todos.js';
import Chat from './chat/chat.js';
import MenuAppBar from './menu/menuBar.js';
class Container extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div>
    <MenuAppBar />
      <Switch>
        <Route exact path="/" component={LightsSettings} />
        <Route path="/Calendar" component={Calendar} />
        <Route path="/Todos" component={Todos} />
        <Route path="/Chat" component={Chat} />
      </Switch>
  </div>
    );
  }
}

export default Container;
