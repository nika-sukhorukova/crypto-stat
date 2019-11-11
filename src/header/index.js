import React from 'react';
import './style.css';
import '../common-styles.css';
import MainLogo from './logo';
import NavigationMenu from './navigation';

class Header extends React.Component {
    render () {
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
}

export default Header

