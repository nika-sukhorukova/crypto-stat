import React from 'react';
import './style.css';
import MainLogo from './logo/index';
import NavigationMenu from './navigation/index';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';


function Header() {
    return (
        <AppBar style={{ backgroundColor: '#fafafa' }}>
            <Container>
                <div className='header__wrapper'>
                    <MainLogo />
                    <NavigationMenu />
                </div>
            </Container>
        </AppBar>
    )
};

export default Header

