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
import './todos.css';
import MenuAppBar from '../menu/menuBar.js';
class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      addClass: false
    }
    this.addTodo = this.addTodo.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.removeAllCheckedTodos = this.removeAllCheckedTodos.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.timer = null;
  }
   loadTodos() {
       let cardStates = [];
    fetch("http://116.203.42.55/todos")
    .then(res => res.json())
    .then((res) => {
        for (var i = 0; i < res.list.length; i++) {
            cardStates.push(res.list[i].checked);
        }
      this.setState({
        todos: res.list
      })
      if (res.list.filter((val)=>{return val.checked;}).length >= 1) {
           this.toggleClass(true);
      }
      else {
          this.toggleClass(false);
      }
    })
      }

    toggleClass(e) {
              e?this.setState({addClass: true}):this.setState({addClass: false});
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

  this.timer = setInterval(() => {
    this.loadTodos();
  }, 500);
}

  componentWillUnmount() {
    clearInterval(this.timer);
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
      let deletBtn = ["deletBtn"];
      let greenArray = this.state.addBgGreen;
      if(this.state.addClass) {
          deletBtn.push('visisble');
      }

    return (
      <div className="Container">
                    <MenuAppBar />
        <div className="ToDosContainer">
        {
          this.state.todos.map((e, i) => (
            <Card className={e.checked?  'todoCard bgChecked':'todoCard'} key={i}>
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
        <Button  variant="contained" className={deletBtn.join(' ')}  color="secondary"  onClick={()=>this.removeAllCheckedTodos()}>
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
