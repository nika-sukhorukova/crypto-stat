import React from 'react';
import TodoItem from '../todo-item';
import './style.css'

export default ({ tasksList, deleteTask, completeTask }) =>
    <ul className='todo-list'>
        {tasksList.map(({ id, text, isCompleted }) => (
            <TodoItem
                id={id}
                key={id}
                text={text}
                isCompleted={isCompleted}
                deleteTask={deleteTask}
                completeTask={completeTask} />
        ))}
    </ul>

