import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
        return (
            <form>
                <input 
                  onChange={props.handleChangeTodo}
                  type='text' 
                  name='todo' 
                  value={props.value}
                  placeholder='Type here...' />

                  <button onClick={props.handleAddTodo}>Add Item</button>
            </form>
        )
}

export default TodoForm;