import React, { Component } from 'react'
import Todos from './Components/Todos'
import Head from "./Components/layout/Header"
import AddTodo from './Components/AddTodo';
import {v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id:uuidv4(),
        title: "Learn Javascript",
        completed : true
      },
      {
        id:uuidv4(),
        title: "Learn React",
        completed : false
      },
      {
        id:uuidv4(),
        title: "Learn AWS",
        completed : false
      },
      
    ]
  };

  markComplete = idx => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === idx) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({todos: [...this.state.todos.filter( todo => todo.id !== id)] });
  }

  addTodo = title => {
    const newTodo = {
      id : uuidv4(),
      title : title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Head/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}
export default App;
