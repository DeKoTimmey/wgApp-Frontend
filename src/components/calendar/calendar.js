import React, { Component } from 'react';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import MenuAppBar from '../menu/menuBar.js';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {

          const { user } = this.props.auth;

    return (
        <div className="App">
            <MenuAppBar />

        </div>
    );
  }
}

Calendar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Calendar);
