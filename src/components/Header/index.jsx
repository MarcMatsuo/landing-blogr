import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-informations">
                <h2 className='header-logo'>Blogr</h2>
                <ul className="header-informations-list">
                    <li className="list-item">Product <i className="fa-solid fa-chevron-down"></i></li>
                    <li className="list-item">Company <i className="fa-solid fa-chevron-down"></i></li>
                    <li className="list-item">Connect <i className="fa-solid fa-chevron-down"></i></li>
                </ul>
            </div>
            <div className="header-login">
                <button className='intro-btn login'>Login</button>
                <button className='intro-btn signup'>Sign Up</button>
            </div>
            <div className='header-menu-hamburguer'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}
 
export default Header;