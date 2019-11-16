import React from 'react';




const TodoItem = ({text, isCompleted}) =>(
    <li>
        <span className={isCompleted ? 'complete' : 'text'}>{text}</span>
    </li>
)



export default TodoItem