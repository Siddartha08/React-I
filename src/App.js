import React, { Component } from 'react';
//I think this is correct
import TodoList from './TodoList';
import './app.css';


class App extends Component {
  constructor() {
    super();

  }

  render() {
    return  (
       <div>
       <h1>To-do App</h1>
       <TodoList/>
      </div>
    )
  }
}

export default App;