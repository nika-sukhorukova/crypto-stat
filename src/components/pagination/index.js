import React from 'react';
// import Button from '@material-ui/core/Button';
import './style.css';

export const Pagination = ({ onClick, stats, limit, page }) => (
    <div className='pagination'>
        <div>{`Page ${page} of ${Math.ceil(stats.total / limit)}`}</div>
        <button onClick={onClick} data-name='prev' disabled={page === 1 ? true : false}>{'Previous 10'}</button>
        <button onClick={onClick} data-name='one'>{++page}</button>
        <button onClick={onClick} data-name='two'>{++page}</button>
        <button onClick={onClick} data-name='three'>{++page}</button>
        <button onClick={onClick} data-name='four'>{++page}</button>
        <button onClick={onClick} data-name='next'disabled={page === Math.ceil(stats.total / limit) ? true : false}>{'Next 10'}</button>
    </div>
);