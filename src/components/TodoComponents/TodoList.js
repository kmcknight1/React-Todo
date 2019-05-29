import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

        return (
            <ul>
            {props.todos.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo}
                />
            ))}
            </ul>
        )
}

export default TodoList;