import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HighlightIcon from '@material-ui/icons/Highlight';
import MessageIcon from '@material-ui/icons/Message';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { logoutUser } from "../../actions/authActions";
import './sideMenu.css';

class SideMenu extends React.Component {
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


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


// TODO: add Badgets


  render() {
    const sideList = (
      <div>
        <List>
            <ListItem component={Link} to='../dashboard' button>
              <ListItemIcon><DashboardIcon/></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component={Link} to='../lights' button>
              <ListItemIcon><HighlightIcon/></ListItemIcon>
              <ListItemText primary="Lights" />
            </ListItem>
            <ListItem  component={Link} to='../chat' button>
              <ListItemIcon><MessageIcon/></ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem  component={Link} to='../todos' button>
              <ListItemIcon><ShoppingBasketIcon/></ListItemIcon>
              <ListItemText primary="Einkausliste" />
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
          <Button variant="contained" className="logoutBtn" color="primary" onClick={this.onLogoutClick} >
          Logout
          </Button>
        </SwipeableDrawer>
      </div>
    );
  }
}


SideMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(SideMenu);
