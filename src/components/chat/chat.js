import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";


import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import MenuAppBar from '../menu/menuBar.js';


import './chat.css';


// TODO: Scroll to end of page function


class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: this.props.auth.user.name,
        massage: [],
        scrollToPageEnd: false
    }
    this.addMassage = this.addMassage.bind(this);
    this.loadMassages = this.loadMassages.bind(this);
    this.currentTime = this.currentTime.bind(this);
     this.scrollToEnd =  this.scrollToEnd.bind(this);
    this.timer = null;
    this.scrollToEndTimeOut = null;
  }


   loadMassages() {
       let cardStates = [];
    fetch("http://116.203.42.55/massages")
    .then(res => res.json())
    .then((res) => {
      this.setState({
        massage: res.massageList
      })
    })

 }


   addMassage(e) {
     e.preventDefault();
     e.stopPropagation();
    fetch("http://116.203.42.55/addMassage" , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: this.state.user,
      content: this.InputBase.value,
      time: this.currentTime()
    })
  })
    .then(res => res.json())
    .then((res) => {
      this.InputBase.value = "";
      this.loadMassages()
    })
    .then(() => {
      this.scrollToEnd();
    })
    if (this.InputBase.value === "") {
      return ;
    }
    this.setState({
      scrollToPageEnd: false
    })
  }


currentTime(){
    let date = new Date();
    let time = date.getHours()+":"+ date.getMinutes();
    return time;
}

async scrollToEnd(){
  let endOfPageY = document.documentElement.offsetHeight;

    setTimeout(function() {
      window.scrollTo(0,endOfPageY)}, 40);


    console.log("endOfPageY: " + endOfPageY);
}

componentDidMount() {
 this.loadMassages();
   this.scrollToEnd();
  this.timer = setInterval(() => {
    this.loadMassages();
  }, 500);
  this.scrollToEndTimeOut = setTimeout(() => {
    this.scrollToEnd();
  },100)
}

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.scrollToEndTimeOut);
  }

  render() {

    return (
      <div className="Container">
                    <MenuAppBar />
        <div className="messagesContainer">
        {
          this.state.massage.map((e, i) => (
              <Card className={e.user==this.state.user?"ownMessage":"massageCard"} key={i}>
                <CardContent className="massageCardContent">
                  <Typography variant="subtitle1" color="textSecondary">
                    {e.user}
                  </Typography>
                  <Typography component="h5" variant="h5">
                    {e.content}
                  </Typography>
                  <Typography className="time" variant="subtitle1" color="textSecondary">
                    {e.time}
                  </Typography>
                </CardContent>
              </Card>
          ))
        }
        </div>
        <div className="ToDosCreater">
          <Paper className="ToDosInt">
            <form className="formContainer" onSubmit={this.addMassage}>
              <InputBase className="inputField" inputRef={(ref) => {this.InputBase = ref}} defaultValue="" placeholder="Sag was nettes!"/>
              <Button  variant="contained" className="sendBtn" color="primary" onClick={(e)=>this.addMassage(e)}>
                <SendIcon/>
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Chat);
