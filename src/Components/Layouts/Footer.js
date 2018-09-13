import React from 'react';
import './Layouts.css'


const Footer = props => (
    <footer>
    <div class="container">
        <p>Copyright DABS @{props.year}</p>
    </div>
    </footer>
);

export default Footer;