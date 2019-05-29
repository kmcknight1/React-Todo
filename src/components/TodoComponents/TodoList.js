import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

        return (
            <div>
            {props.todos.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo}
                />
            ))}
            </div>
        )
}

export default TodoList;