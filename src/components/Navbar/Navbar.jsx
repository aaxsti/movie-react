import React from 'react';
import style from './Navbar.module.css';

let Navbar = () => {
    return (
        <nav className={style.navbarBox}>
            <div className={style.navbarMenu}>
                <ul>
                    <li>Movies</li>
                    <li>Favourites</li>
                    <li>Ratings</li>
                    <li>About us</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;