import React from 'react';
import './style.css';

let today = new Date();
let year = today.getFullYear();
let copyright = '\u00A9';

function Footer (){
       return(
            <footer className='footer'>
                <span>{copyright}Sukhorukova Dev. {year}</span>
            </footer>
        )
    }

export default Footer;