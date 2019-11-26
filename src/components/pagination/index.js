import React from 'react';
import './style.css';

export const Pagination = ({onClick, stats}) => (
    <div className='pagination'>
        {stats.offset !== 0 && <button onClick={onClick} data-name='prev'>{'<<'}</button>}
        {stats.offset !== (Math.ceil(stats.total/stats.limit)) && <button onClick={onClick} data-name='next'>{'>>'}</button>}
    </div>
);