import React, { Component } from 'react';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import MenuAppBar from '../menu/menuBar.js';
import Calendar from 'react-calendar-material';
import './calendar.css'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MeetingModal from './meetingModal';

class CalendarConatiner extends Component {
  constructor(props){
    super(props);
    this.state = {
        open: false,
        date: ""
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleOpen(d){
      this.setState({
          open: true,
          date: d
      })
  }

  handleClose(){
      this.setState({
          open: false
      });
  }

  render() {

          const { user } = this.props.auth;

    return (
        <div className="Kalender">
            <MenuAppBar />
            <Calendar
              accentColor={'#00695C'}
              orientation={'flex-col'}
              showHeader={false}
              onDatePicked={(d) => {
                this.handleOpen(d)
              }}
              className="calenderContain"
            />,
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              className="modalContainer"
            >
              <div>
                  <MeetingModal date={this.state.date}/>
              </div>
            </Modal>

        </div>
    );
  }
}

CalendarConatiner.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(CalendarConatiner);
