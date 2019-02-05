import React, { Component } from 'react';
import SwitchBtn from './switchBtn/switchBtn.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import SmokingRooms from '@material-ui/icons/SmokingRooms';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import Fastfood from '@material-ui/icons/Fastfood';
import LocalCafe from '@material-ui/icons/LocalCafe';
import './lights.css';
class LightsSettings extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="lightsContainer">
        <List>
        <ListItem>
          <ListItemIcon>
            <SmokingRooms />
          </ListItemIcon>
          <ListItemText primary="Rauchen?" />
          <ListItemSecondaryAction>
            <SwitchBtn light={0}/>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Fastfood />
          </ListItemIcon>
          <ListItemText primary="Hunger?" />
          <ListItemSecondaryAction>
            <SwitchBtn light={1}/>
          </ListItemSecondaryAction>
        </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocalCafe />
            </ListItemIcon>
            <ListItemText primary="Käffchen/Teechen?" />
            <ListItemSecondaryAction>
              <SwitchBtn light={2}/>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <VideogameAsset />
            </ListItemIcon>
            <ListItemText primary="Langeweile?" />
            <ListItemSecondaryAction>
              <SwitchBtn light={3}/>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
      </div>
    );
  }
}

export default LightsSettings;
