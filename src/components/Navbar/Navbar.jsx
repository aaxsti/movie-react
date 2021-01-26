import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbarBox}>
            <div className={style.navbarMenu}>
                <ul>
                    <li><NavLink to="/movies" activeClassName={style.activeLink}>Movies &nbsp;
                        <svg width="17" height="13" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.76 6H18V14H2V2.47L3.76 6ZM20 0H16L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V0Z"
                                fill="black"/>
                        </svg>
                    </NavLink></li>
                    <li><NavLink to="/favourites" activeClassName={style.activeLink}>Favourites &nbsp;
                        <svg width="20" height="13" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.99 7L7.05 9.06L4.99 10L7.05 10.94L7.99 13L8.93 10.94L10.99 10L8.93 9.06L7.99 7ZM16 0L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 19.99 15.1 19.99 14V0H16ZM18 14H2V2.47L3.76 6H13.99L13.36 7.37L11.99 8L13.36 8.63L13.99 10L14.62 8.63L15.99 8L14.62 7.37L13.99 6H18V14Z"
                                fill="black"/>
                        </svg>
                    </NavLink></li>
                    <li><NavLink to="/ratings" activeClassName={style.activeLink}>Ratings&nbsp;
                        <svg width="20" height="15" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 6.87555H12.7129L10.0006 0L7.28595 6.87555H0L5.94512 10.9127L3.8191 18L10.0006 13.7511L16.1798 18L14.056 10.9127L20 6.87555ZM10.0006 11.7453L6.57576 14.3024L7.98818 10.659L4.74859 8.30651L8.75064 8.40982L10.0006 4.27753L11.2494 8.40982L15.2503 8.30651L12.0107 10.659L13.4231 14.3024L10.0006 11.7453Z"
                                fill="black"/>
                        </svg>
                    </NavLink></li>
                    <li><NavLink to="/about" activeClassName={style.activeLink}>About us&nbsp;
                        <svg width="18" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 14H10V8H8V14ZM9 4C8.5 4 8 4.5 8 5C8 5.5 8.5 6 9 6C9.5 6 10 5.5 10 5C10 4.5 9.5 4 9 4ZM9 0C4 0 0 4 0 9C0 14 4 18 9 18C14 18 18 14 18 9C18 4 14 0 9 0ZM9 16C5.1 16 2 12.9 2 9C2 5.1 5.1 2 9 2C12.9 2 16 5.1 16 9C16 12.9 12.9 16 9 16Z"
                                fill="black"/>
                        </svg>
                    </NavLink></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;