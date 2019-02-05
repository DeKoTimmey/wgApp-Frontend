import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    }
  }
   loadTodos() {
    fetch("116.203.42.55/todos")
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      this.setState({
        todos: res.list
      })
    })
  }

   addTodo() {
    fetch("116.203.42.55/add" , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: "Tim",
      title: this.input.value
    })
  })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      this.input.value = "";
      this.loadTodos()
    })
  }
  toggleTodo(i) {
   fetch("116.203.42.55/toggleTodo" , {
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
 removeTodo(i) {
  fetch("116.203.42.55/remove" , {
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
  render() {
    return (
      <div className="App">
        <div>
          <input ref={ref=>this.input=ref} defaultValue=""/>
          <button onClick={()=>this.addTodo()}>add</button>
        </div>
        {
          this.state.todos.map((e, i) => (
            <div key={i}>
              <p>{e.title} || {e.user}</p><input type="checkbox" checked={e.checked} onClick={()=>this.toggleTodo(i)}/>
              <button onClick={()=>this.removeTodo(i)}>löschen</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
