import React from 'react';
import './style.css';

let today = new Date();
let year = today.getFullYear();
let copyright = '\u00A9';

function Footer() {
    return (
        <footer className='footer'>
                <div className ='footer-wraper'>
                    <span className='copyright'>{copyright} Sukhorukova {year}</span>
                </div>
        </footer>
    )
}

export default Footer;