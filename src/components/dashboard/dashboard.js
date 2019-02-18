import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Dashboard extends Component {

    constructor(props){
      super(props);
    this.state = {
      user: this.props.auth.user.name
    }};

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(this.state.user);
return (
      <div>
          Ich bin ein dashboard
      </div>
    );
  }
}



Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
