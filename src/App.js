import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container.js';
import MenuAppBar from './components/menu/menuBar.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>
          <MenuAppBar />
          <Container />
        </div>  
      </Router>
    );
  }
}

export default App;
