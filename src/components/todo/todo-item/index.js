import React from 'react';
import './style.css'
import CloseButton from '../../buttons/close/idex';


export default ({ text, isCompleted, deleteTask, id, completeTask }) =>
    <li className='todo-list-item'>
        <span
            className={isCompleted ? 'completed text' : 'text'}
            onClick={() => completeTask(id)}>
            {text}
        </span>
        <CloseButton onClick={() => deleteTask(id)} />
    </li>
