import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

  render() {
    return (
      <div>
        <h2>My To-Do List</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm value={this.state.todo} handleAddTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
