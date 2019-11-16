import React from 'react'

const FILTER_BTN = [
    {
        text: 'all',
        id: 'all'
    },
    {
        text: 'active',
        id: 'active'
    },
    {
        text: 'complete',
        id: 'complete'
    }

];

const ToDoFooter = ({amount, activeFilter}) => (
    <div>
        <span>{amount} taks left</span>
        <div>
            {FILTER_BTN.map(({ text, id }) =>(
                <button
                key={id}
                >{text}</button>
            ))}
        </div>
    </div>
);

export default ToDoFooter;
