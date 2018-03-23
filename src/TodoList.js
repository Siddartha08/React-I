import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {
        state = {
            tasks: [],
            newTodo: ''
        }
    


formSubmit = (event) => {
event.preventDefault();
const tasks = [...this.state.tasks];
const newTodo = {todo: this.state.newTodo, clicked: false};
tasks.push(newTodo);
this.setState({ tasks: tasks, newTodo: '' });
} 

inputChange = (event) => {
    const newTodo = event.target.value;
    this.setState({ newTodo: newTodo})
};

clickTodo = (index) => {

}

render() {
    return (
        <div>
            {this.state.tasks.map( (tasks, index) => {
              return <Todo key={index} tasks={tasks}/>
            }
            )}
            <form onSubmit={this.formSubmit}>
                <input id="addtodo" type="text" onChange={this.inputChange} value={this.state.newTodo} placeholder="Add an item to yourlist!"/>
            
                <div>
                    <button type="submit">Add ToDo</button>
                </div>
            </form>
        </div>
)}
}
  

  export default TodoList;