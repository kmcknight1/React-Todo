import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
        return (
            <form className='form'>
                <input 
                  onChange={props.handleChangeTodo}
                  type='text' 
                  name='todo' 
                  value={props.value}
                  placeholder='Type here...' />

                  <button onClick={props.handleAddTodo}>Add Item</button>
                  <button onClick={props.handleDeleteTodo}>Clear Completed</button>
            </form>
        )
}

export default TodoForm;