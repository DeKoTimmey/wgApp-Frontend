import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import './calendar.css'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class MeetingModal extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: this.props.auth.user.name,
        date: this.props.date,
        subject: ""
        }

  }


  render() {
      console.log("Date: " +  this.state.date.getDate() + "."+ this.state.date.getMonth() + "."+ this.state.date.getFullYear());
          const { user } = this.props.auth;

    return (
        <div>
            <Card className="modalSetter">
                    <Typography gutterBottom variant="h5" component="h2">

                    </Typography>
           </Card>
        </div>
    );
  }
}

MeetingModal.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(MeetingModal);
