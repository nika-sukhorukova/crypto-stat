import React from 'react';
import './style.css';

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
        text: 'completed',
        id: 'completed'
    }

];

export default ({ amount, changeFilter }) =>
    <div className='filter'>
        <span className='amount'>{amount} taks left</span>
        <div>
            {FILTER_BTN.map(({ text, id }) => (
                <button className='filter-button sizer'
                    key={id}
                    onClick={() => { changeFilter(id) }}
                >{text}</button>
            ))}
        </div>
    </div>


