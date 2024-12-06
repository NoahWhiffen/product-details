import React from 'react';
import image from '../assets/images/annies_electronics.jpg';
import './Header.css';

function Header() {
    return(
        <header>
            <div className="topHeader">
                <img 
                className='headerImage'
                src={image}/>
                <a 
                href='#'
                className="topLinks"
                >
                    My Account
                </a>
                <a 
                href='#'
                className="topLinks">
                    Bag
                </a>
            </div>
            <div className="bottomHeader">
                <nav>
                    <a
                    href='#'
                    className='bottomLinks'>
                        Shop
                    </a>
                    <a
                    href='#'
                    className='bottomLinks'>
                        Support
                    </a>
                    <a
                    href='#'
                    className='bottomLinks'>
                        About Us
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;