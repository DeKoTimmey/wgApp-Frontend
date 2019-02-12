import React, { Component } from 'react';
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
import './registry.css';


class Registry extends Component {
  constructor(props){
    super(props);

    }

    componentDidMount() {
console.log("Bin drin");
    }



  render() {
    return (
        <div className="wrapper">
        <Card className="loginCard">
            <form noValidate autoComplete="off">
                <CardContent className="content">
                <Typography gutterBottom variant="h5" component="h2">
                Komm ma rein Alda!
                </Typography>
                <div>
                <TextField
                  label="Name"
                  type="text"
                  margin="normal"
                  className="textField"
                />
                <TextField
                  label="Email"
                  type="text"
                  margin="normal"
                  className="textField marginLeft"
                />
                </div>
                <div>
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  className="textField "
                />
                <TextField
                  label="Password wiederholen"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  className="textField marginLeft"
                />
                </div>
                <CardActions className="cardAction">
                <Button variant="contained" color="primary">
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

export default Registry;
