import React from 'react';
import './style.css';

export default ({ base }) =>
    <div className='base_style'>
        <span className ='base_style_item'> Bitcoin pricing query result in {base.symbol}</span>
        <span className ='base_style_item'>{base.sign}</span>
    </div>