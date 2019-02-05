import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SideMenu from './sideMenu.js';
import './menuBar.css';
class MenuAppBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerText: "Lights",
      bgColor: null
    }
  }

  setHeading = () => {
    switch (window.location.pathname) {
      case "/":
        return "Lights";
        break;
      case "/chat":
      return "Chat";
        break;
      case "/todos":
      return "Todos";
        break;
      case "/calendar":
      return "Kalender";
        break;
      default:
        return "default";
    }
  }
  setBarColor = () => {
    switch (window.location.pathname) {
      case "/":
        return "lights";
        break;
      case "/chat":
      return "chat";
        break;
      case "/todos":
      return "todos";
        break;
      case "/calendar":
      return "calendar";
        break;
        default:
          return "/";
    }
  }

  render() {
    return (
      <AppBar className={this.setBarColor()} position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <SideMenu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {this.setHeading()}
          </Typography>
        </Toolbar>
      </AppBar>

    );
  }
}

export default MenuAppBar;
