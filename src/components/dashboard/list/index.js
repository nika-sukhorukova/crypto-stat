import React from 'react';
import './style.css'

export default ({ coins }) =>
    <ol>
        {coins.map((coin) => (
            <li key={coin.id}>
                <span>{coin.name}</span>
            </li>
        ))}
    </ol>
