import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Checkbox from '@material-ui/core/Checkbox';
import './todos.css';
class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.removeAllCheckedTodos = this.removeAllCheckedTodos.bind(this);
  }
   loadTodos() {
    fetch("http://116.203.42.55/todos")
    .then(res => res.json())
    .then((res) => {
      this.setState({
        todos: res.list
      })
    })
  }

   addTodo(e) {
     e.preventDefault();
     e.stopPropagation();
    fetch("http://116.203.42.55/add" , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: "Tim",
      title: this.InputBase.value
    })
  })
    .then(res => res.json())
    .then((res) => {
      this.InputBase.value = "";
      this.loadTodos()
    })
    if (this.InputBase.value === "") {
      return ;
    }
  }
  toggleTodo(i) {
   fetch("http://116.203.42.55/toggleTodo" , {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     index: i,
  })
 })
   .then(res => res.json())
   .then((res) => {
     this.loadTodos()
   })
 }
 removeTodo(i) {
  fetch("http://116.203.42.55/remove" , {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    index: i,
 })
})
  .then(res => res.json())
  .then((res) => {
    console.log(res);
    this.loadTodos()
  })
}


   componentDidMount() {
    this.loadTodos();

    setInterval(() => {
      this.loadTodos();
    }, 500);
  }


removeAllCheckedTodos() {
fetch("http://116.203.42.55/removeAllChecked" , {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   }
 })
   .then(res => res.json())
   .then((res) => {
     console.log(res);
     this.loadTodos()
   })
 }

  render() {
    return (
      <div className="Container">
        <div className="ToDosContainer">
        {
          this.state.todos.map((e, i) => (
            <Card className="todoCard" key={i}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  {e.user}
                </Typography>
                <Typography component="h5" variant="h5">
                  {e.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>this.toggleTodo(i)}>
              <Checkbox color="primary" checked={e.checked} />
              </Button>
              <Button onClick={()=>this.removeTodo(i)}>
                <DeleteOutlineIcon />
            </Button>
            </CardActions>
            </Card>
          ))
        }
        </div>
        <Button  variant="contained" className="deletBtn" color="secondary"  onClick={()=>this.removeAllCheckedTodos()}>
          <DeleteOutlineIcon />
        </Button>
        <div className="ToDosCreater">
          <Paper className="ToDosInt">
            <form className="formContainer" onSubmit={this.addTodo}>
              <InputBase className="inputField" inputRef={(ref) => {this.InputBase = ref}} defaultValue="" placeholder="Was cooles!"/>
              <Button  variant="contained" className="sendBtn" color="primary" onClick={(e)=>this.addTodo(e)}>
                <SendIcon/>
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Todos;
