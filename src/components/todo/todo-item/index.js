import React from 'react';
import './style.css';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default ({ text, isCompleted, deleteTask, id, completeTask }) =>
    <ListItem style={{ cursor: 'pointer' }}>
        <span className='todo-list-item'
            className={isCompleted ? 'completed text' : 'text'}
            onClick={() => completeTask(id)}>
            {text}
        </span>
        <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => deleteTask(id)} />
        </IconButton>
    </ListItem>
