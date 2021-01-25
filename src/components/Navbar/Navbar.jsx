import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbarBox}>
            <div className={style.navbarMenu}>
                <ul>
                    <li><NavLink to="/movies" activeClassName={style.activeLink}>Movies &nbsp;<svg width="17" height="13" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.76 6H18V14H2V2.47L3.76 6ZM20 0H16L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V0Z" fill="black"/>
                    </svg>
                    </NavLink></li>
                    <li><NavLink to="/favourites" activeClassName={style.activeLink}>Favourites</NavLink></li>
                    <li><NavLink to="/ratings" activeClassName={style.activeLink}>Ratings</NavLink></li>
                    <li><NavLink to="/about" activeClassName={style.activeLink}>About us</NavLink></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;