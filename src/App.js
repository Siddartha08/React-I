import React from 'react';
import { render } from "react-dom";
import { Component } from "react";
import './app.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['get milk', 'buy eggs', 'stay classy'],
      newTask: ''
    }
  }

  inputChange = event => {
    this.setState({ newTask: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    const newTask = this.state.newTask;
    const tasksArray = this.state.tasks;
    tasksArray.push(newTask);
    this.setState({ tasks: tasksArray, newTask: "" });
  };  

  handleClick = event => {
    let value = document.querySelectorAll("myCheck");
    return value;

  }
  


  render() {
    return <div>
      <h1>To-do App</h1>
    {this.state.tasks.map(tasks => {
          return <div className="tasks"><input type="checkbox" id="myCheck" onClick={this.handleClick} /> <div>{tasks}</div></div>;
        })}
    <form  onSubmit={this.formSubmit}>
        <input id="addtodo" type="text" onChange={this.inputChange} value={this.state.newTask} placeholder="Add an item to yourlist!" value={this.state.newToDo} />
        
        <div>
          <button type="submit">Add ToDo</button>
        </div>
  </form>
  </div>
  }
}


// const App = () => (
//   <div>
//     <h2>Todo App</h2>
    
//   </div>
// );<input id="duedate" type="date"onChange={this} value={this.state.newDueDate} />

export default App;
