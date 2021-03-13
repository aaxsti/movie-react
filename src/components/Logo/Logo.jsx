import React from 'react';
import style from './Logo.module.css';

const Logo = () => {
    return (
        <div className={style.logoBox}>
            <h3 className={style.logo}>MovieHub</h3>
        </div>
    );
}

export default Logo;