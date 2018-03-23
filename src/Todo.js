import React, { Component } from 'react';



class Todo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tasks: ['get milk', 'buy eggs', 'stay classy'],
      newTask: ''
    }
    }

    inputChange = event => {
        this.setState({ newTask: event.target.value });
    };

    handleClick = event => {
        let value = document.querySelectorAll("myCheck");
        return value;
    
    }
render() {
    return (
        <div>
        {this.state.tasks.map((tasks, index) => {
            return ( 
              <div key={index}>
                <input type="checkbox" onClick={this.handleClick} ></input>
                {tasks}
              </div>
            )
        })}
        </div>
    )
}

}
export default Todo;