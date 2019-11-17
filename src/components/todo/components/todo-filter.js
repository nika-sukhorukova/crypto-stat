import React from 'react';
import '../style.css'

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

export default ({ amount, activeFilter }) =>
    <div className='filter'>
        <span className='amount'>{amount} taks left</span>
        <div>
            {FILTER_BTN.map(({ text, id }) => (
                <button className='button sizer'
                    key={id}
                >{text}</button>
            ))}
        </div>
    </div>


