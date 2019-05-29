import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

        return (
            <div className='list'>
            {props.todos.map(todo => (
                <Todo 
                handleToggleTodo={props.handleToggleTodo}
                key={todo.id}
                todo={todo}
                />
            ))}
            </div>
        )
}

export default TodoList;