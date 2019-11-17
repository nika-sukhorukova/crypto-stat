import React from 'react';
import TodoItem from './todoitem';

export default ({ tasksList, deleteTask }) =>
    <ul>
        {tasksList.map(({ id, text, isCompleted }) => (
            <TodoItem deleteTask={deleteTask} id={id} key={id} text={text} isCompleted={isCompleted} />
        ))}
    </ul>

