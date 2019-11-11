import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';



class MainLogo extends React.Component {
    render () {
        return(
            <div className='logo'>
                <Link to='/'>CryptoStat</Link>
            </div>
        )
    }
};

export default MainLogo