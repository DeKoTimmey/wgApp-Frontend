import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HighlightIcon from '@material-ui/icons/Highlight';
import MessageIcon from '@material-ui/icons/Message';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';



export default class SideMenu extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    left: false,
    heading: ""
  }};

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


// TODO: add Badgets 


  render() {
    const sideList = (
      <div>
        <List>
            <ListItem component={Link} to='../' button>
              <ListItemIcon><HighlightIcon/></ListItemIcon>
              <ListItemText primary="Lights" />
            </ListItem>
            <ListItem  component={Link} to='../chat' button>
              <ListItemIcon><MessageIcon/></ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem  component={Link} to='../todos' button>
              <ListItemIcon><AssignmentIcon/></ListItemIcon>
              <ListItemText primary="Todos" />
            </ListItem>
            <ListItem  component={Link} to='../calendar' button>
              <ListItemIcon><CalendarTodayIcon/></ListItemIcon>
              <ListItemText primary="Kalender" />
            </ListItem>
        </List>

      </div>
    );

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer('left', true)} />
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
