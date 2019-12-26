import React from 'react';
import './style.css';
import MainLogo from './logo/index';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

function Header() {
	return (
		<AppBar style={{ backgroundColor: '#fafafa' }}>
			<Container>
				<div className="header__wrapper">
					<MainLogo />
				</div>
			</Container>
		</AppBar>
	);
}

export default Header;
