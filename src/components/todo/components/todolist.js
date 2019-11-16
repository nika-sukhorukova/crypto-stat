import React from 'react';
import TodoItem from './todoitem';

const ToDoList = ({ taskList }) =>(
    <ul>
        {taskList.map(({id, text, isCompleted}) => (
            <TodoItem key={id} text={text} isCompleted={isCompleted}/>
        ))}
    </ul>
)

export default ToDoList;