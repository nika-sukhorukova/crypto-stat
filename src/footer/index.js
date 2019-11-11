import React from 'react';
import './style-footer.css';
import '../common-styles.css';

let today = new Date();
let year = today.getFullYear();

class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <div className = 'wrapper'>
                    <div className='footer__wrapper'>
                        <div>nika</div>
                        <div>{year}</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;