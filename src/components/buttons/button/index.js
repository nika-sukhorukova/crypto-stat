import React from 'react';
import './style.css';

export const Button = ({ onClick, value }) => (
    <button className='button' onClick={onClick}>
        {value}
    </button>
);