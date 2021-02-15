import React from 'react';
import style from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={style.logoBox}>
            <h3 className={style.logo}>Movie</h3>
        </div>
    );
}

export default Logo;