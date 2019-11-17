import React from 'react';


export default ({ text, isCompleted, deleteTask, id }) =>
    <li className='todo-list-item'>
        <span className= 'todo-list-item' onClick={()=> deleteTask(id)}>{text}</span>
        {/* <span class="close"></span> */}
    </li>

