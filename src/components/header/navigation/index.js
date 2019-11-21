import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavigationMenu() {
    return (
        <nav className='nav__menu'>
            <ul className='nav__list'>
                <li className='nav__list__item'>
                    <NavLink exact to='/' activeClassName='active'>Dashboard</NavLink>
                </li>
                <li className='nav__list__item'>
                    <NavLink to='/history' activeClassName='active'>History</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationMenu