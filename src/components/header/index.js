import React from 'react';
import './style.css';
import MainLogo from './logo/logo';
import NavigationMenu from './navigation/navigation';

function Header(){
    return (
        <header className='header'>
            <div className = 'wrapper'>
                <div className='header__wrapper'>
                    <MainLogo />
                    <NavigationMenu />
                </div>
            </div>
        </header>
    )
}

export default Header

