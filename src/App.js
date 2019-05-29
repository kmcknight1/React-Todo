import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// import { createGlobalStyle, ThemeProvider } from "styled-components";
// import { reset, themes, List, ListItem, Divider } from "react95";

// const ResetStyles = createGlobalStyle`${reset}`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Finish ToDo List',
          id: 1559160945958,
          completed: false
        }
      ],
      todo: ''
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() }
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    })
  }

  changeTodo = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  toggleTodo = (id) => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({ todos })
    console.log(todos)
  }

  deleteTodo = (event) => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos })
  }

  render() {
    return (
      <div className='container'>
        <div className='inner-container'>
        <h2>My To-Do List</h2>
        <TodoList todos={this.state.todos} handleToggleTodo={this.toggleTodo} />
        <TodoForm value={this.state.todo} 
          handleAddTodo={this.addTodo} 
          handleChangeTodo={this.changeTodo} 
          handleDeleteTodo={this.deleteTodo}
          />
      </div>
      </div>
    );
  }
}

export default App;
