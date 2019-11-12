import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function MainLogo () {
    return(
        <div className='logo'>
            <Link to='/dashboard'>CryptoStat</Link>
        </div>
    )
};

export default MainLogo