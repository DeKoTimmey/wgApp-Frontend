import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
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
import './register.css';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
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
        const userData = {
              email: this.state.email,
              password: this.state.password
            };
            console.log(userData);
            this.props.loginUser(userData);
}


componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
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
                Moin!
                </Typography>
                <div>
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  margin="normal"
                  className={classnames("textField", {
                  invalid: errors.email || errors.emailnotfound
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
                  invalid: errors.password || errors.passwordincorrect
                })}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                />
                </div>
                <CardActions className="cardAction">
                <Button variant="contained" color="primary" type="submit">
                Login
                </Button>
                </CardActions>
                </CardContent>
           </form>
       </Card>
       </div>

    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
