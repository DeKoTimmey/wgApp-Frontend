import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './register.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

    onChange(e){
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit(e){
        e.preventDefault();
    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
                console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
}


componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }


  render() {
          const { errors } = this.state;
    return (
        <div className="wrapper">
        <Card className="loginCard">
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <CardContent className="content">
                <Typography gutterBottom variant="h5" component="h2">
                Komm ma rein Alda!
                </Typography>
                <div>
                <TextField
                  label="Name"
                  type="text"
                  id="name"
                  margin="normal"

                  className= {classnames("textField", {
                    invalid: errors.name
                  })}
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                />
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  margin="normal"
                  className={classnames("textField marginLeft", {
                    invalid: errors.email
                  })}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                />
                </div>
                <div>
                <TextField
                  label="Passwort"
                  type="password"
                  id="password"
                  margin="normal"
                  className={classnames("textField", {
                    invalid: errors.password
                  })}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                />
                <TextField
                  label="Passwort wiederholen"
                  id="password2"
                  type="password"
                  margin="normal"
                  className={classnames("textField marginLeft", {
                    invalid: errors.password2
                  })}
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                />
                </div>
                <CardActions className="cardAction">
                <Button variant="contained" color="primary" type="submit">
                Registrieren
                </Button>
                </CardActions>
                </CardContent>
           </form>
       </Card>
       </div>

    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
