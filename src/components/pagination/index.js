import React from 'react';
// import Button from '@material-ui/core/Button';
import './style.css';

export const Pagination = ({ onClick, stats, limit, page }) => (
    <div className='pagination'>
        <button onClick={onClick} data-name='prev' disabled={page === 1 ? true : false}>{'<<'}</button>
        <div>{`Page ${page} of ${Math.ceil(stats.total / limit)}`}</div>
        <button onClick={onClick} data-name='next'disabled={page === Math.ceil(stats.total / limit) ? true : false}>{'>>'}</button>
    </div>
);