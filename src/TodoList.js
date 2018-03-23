import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super()
                    this.state= {
            tasks: Todo,
            newTodo: ''
        }
    }
    // Todo.constructor().state.tasks
    // Todo = Todo.super(props);
    
    formSubmit = event => {
        event.preventDefault();
        const newTodo = this.state.newTodo;
        const tasksArray = this.state.tasks;
        tasksArray.push(newTodo);
        this.setState({ tasks: tasksArray, newTodo: "" });
    };  
    
    

    render() {

        // const { children } = this.props;
        // var childrenWithProps = Todo.map(children, index) => {



        // }


        return (
        <div>
            <Todo />
          {/* {this.state.tasks.map((tasks, i) => <Todo key={i} tasks={tasks} />)} */}
            <form  onSubmit={this.formSubmit}>
                <input id="addtodo" type="text" onChange={this.inputChange} placeholder="Add an item to yourlist!" value={this.state.newToDo} />
  
                    <div>
                     <button type="submit">Add ToDo</button>
                    </div>
            </form>
        </div>
        )
    }



}
export default TodoList;