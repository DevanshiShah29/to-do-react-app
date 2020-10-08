import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './Components/Todos';
import Head from "./Components/layout/Header";
import AddTodo from './Components/AddTodo';
import {v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/pages/About';
import Log from './Components/pages/Log'
import Mount from './Components/Lifecycle/Mount'
import TimeTaken from './Components/LifeCycleMethods/TimeTaken'
import UpdateWithRedux from './Components/Reducer Practice/UpdateWithRedux';
import CRUD from './Components/Simple CRUD/List';

//import axios from 'axios';
import './App.css';
import AddTask from './Components/Simple CRUD/AddTask';
import EditTask from './Components/Simple CRUD/EditTask';
import ViewTask from './Components/Simple CRUD/ViewTask';


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
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
            <Head />
            <Route exact path="/" render={props => (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/log" component={Log} />
            <Route path="/Mount" component={Mount} />
            <Route path="/Time" component={TimeTaken} />
            <Route path="/redux" component={UpdateWithRedux} />
            <Route path="/crud" component={CRUD} />
            <Route path="/tasks/add" component={AddTask} />
            <Route path="/tasks/edit/:id" component={EditTask} />
            <Route path="/tasks/view/:id" component={ViewTask} />
          </div>
      </Router>
    );
  }
}
export default App;
