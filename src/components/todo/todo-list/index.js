import React from 'react';
import TodoItem from '../todo-item';
import './style.css';
import List from '@material-ui/core/List';

export default ({ tasksList, deleteTask, completeTask }) =>
    <List className='todo-list'>
        {tasksList.map(({ id, text, isCompleted }) => (
            <TodoItem
                id={id}
                key={id}
                text={text}
                isCompleted={isCompleted}
                deleteTask={deleteTask}
                completeTask={completeTask} />
        ))}
    </List>

