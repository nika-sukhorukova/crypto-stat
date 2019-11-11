import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/index';
import History from '../history/index'

import './style.css';


class NavigationMenu extends React.Component {
    render() {
        return (
            <nav className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__list__item'>
                        <Link to ='/'>Dashboard</Link>
                    </li>
                    <li className='nav__list__item'>
                        <Link to ='/history'>History</Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default NavigationMenu