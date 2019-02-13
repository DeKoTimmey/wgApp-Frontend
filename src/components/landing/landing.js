import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './landing.css';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const Register = props => <RouterLink to="/register" {...props} />
const Login = props => <RouterLink to="/login" {...props} />

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {

    };

    }


  render() {
    return (
        <div className="wrapper f_column">
        <Typography variant="h3" color="primary" gutterBottom>
            Noch nicht dabei?
            Jetzt aber schnell.
        </Typography>
        <div>
        <Link component={Register}>
        <Button variant="contained" color="primary">
        Registrieren
        </Button>
        </Link>
        <Link component={Login} className="loginBtn">
        <Button variant="contained" color="default">
        login
        </Button>
        </Link>
        </div>
       </div>

    )
  }
}

export default Landing;
