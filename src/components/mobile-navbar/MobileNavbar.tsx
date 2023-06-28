import React, {useEffect, useState} from 'react';
import './mobile-navbar.scss'
import {Link} from "react-router-dom";


const MobileNavbar = () => {
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || 'home');

    useEffect(() => {
        console.log('hey', activeLink)
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);

    const handleLinkClick = (to: string) => {
        setActiveLink(to);
    };

    const getActiveImageSrc = (imageName: string) => {
        return activeLink === imageName ? `${imageName}-active.svg` : `${imageName}.svg`;
    };

    return (
        <div className="navbar">
            <Link
                to={'/'}
                className={`navbar__link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleLinkClick('home')}
            >
                <img src={`/images/svg/mobile-navbar/${getActiveImageSrc('home')}`} alt="Home" />
            </Link>
            <div
                className={`navbar__link ${activeLink === 'categories' ? 'active' : ''}`}
                onClick={() => handleLinkClick('categories')}
            >
                <img src={`/images/svg/mobile-navbar/${getActiveImageSrc('categories')}`} alt="Categories" />
            </div>
            <Link
                className={`navbar__link ${activeLink === 'cart' ? 'active' : ''}`}
                to="/cart"
                onClick={() => handleLinkClick('cart')}
            >
                <img src={`/images/svg/mobile-navbar/${getActiveImageSrc('cart')}`} alt="Cart" />
            </Link>
            <Link
                className={`navbar__link ${activeLink === 'favorites' ? 'active' : ''}`}
                to="/favorites"
                onClick={() => handleLinkClick('favorites')}
            >
                <img src={`/images/svg/mobile-navbar/${getActiveImageSrc('favorites')}`} alt="Favorites" />
            </Link>
            <div
                className={`navbar__link ${activeLink === 'user' ? 'active' : ''}`}
                onClick={() => handleLinkClick('user')}
            >
                <img src={`/images/svg/mobile-navbar/${getActiveImageSrc('user')}`} alt="User" />
            </div>
        </div>
    );
};


export default MobileNavbar;
