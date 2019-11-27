import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

export const Pagination = ({ onClick, stats }) => (
    <div className='pagination'>
        <Button onClick={onClick} data-name='prev'>{'<<'}</Button>
        <Button onClick={onClick} data-name='next'>{'>>'}</Button>
    </div>
);