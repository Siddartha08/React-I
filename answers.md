### All Answers to Partner Study should be filled out in this file.

1. Single Page Application

- An application that loads a single HTML page, the CSS and JavaScript associated with the page. The page does not reloads when a user interacts with it.

2. Compilers

-Babel is a compiler that is used with react. Compilers like Babel return the JavaScript in a differnt format and syntax that older browsers can interpret

3. Bundlers

-Bundlers like Webpack and Browserify take JS and CSS code written in seperate modules and combine them into a few files.

4. Elements

- Elements in React are immutable and known as the building blocks of React apps. They describe what you see on the screen

example:
const element = <h1>Hello, world</h1>;

5. Components

- React components are JS functions that return an element to be rendered to the page. They are reusable code that usually start with a capital letter.

Example:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

in ES6 

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Components can return:
    - other components
    - arrays
    - strings and numbers

It is good practice to make reusable components if an App uses the same functions multiple times.
6. JSX

    - a syntax extension to JavaScript

7. Package Mangers

    - npm amd Yarn are apclage managers   

8. CDN

    - Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

9. Props and State

- Props are read only inputs to a React compoment passed down from a parent component to a child component. We dont modify props, but rather use `state` if we need to modify values based on an event, user input, network response

    - props.children are available on every component and contains the content between the opening and closing tags of a component:
        - <Welcome>Hello world!</Welcome> 
        - function Welcome(props) {
            return <p>{props.children}</p>;
        - For components defined as classes, use    this.props.children:
            - class Welcome extends React.Component {
                render() {
                    return <p>{this.props.children}</p>;
              }
- State 
    - Components use state if data needs to change over time
    - State is managed by component