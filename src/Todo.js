import React, { Component } from "react";


class Todo extends Component {
      state = {
          clicked: false,
          style: 'none'
        
      }
    


  handleClick = (event) => {
    const clicked = this.state.clicked;
    const style = !clicked ? 'line-through' : 'none'
    this.setState({clicked: !clicked, style: style})
    // let value = document.querySelectorAll("myCheck");
    // return value;
  
  }

    
    render() {
        const styles = { textDecoration: this.state.style }
            return (
            <div style={styles}> <input type="checkbox" onClick={this.handleClick}/> {this.props.tasks.todo}  </div>
            )}
    
}

    export default Todo;