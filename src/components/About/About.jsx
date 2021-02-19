import React from 'react';
import style from "./About.module.css"
import githubIcon from '../../assets/images/icons/github.svg'
import linkedinIcon from '../../assets/images/icons/linkedin.svg'
import vkIcon from '../../assets/images/icons/vkontakte.svg'
import telegramIcon from '../../assets/images/icons/telegram.svg'
import gmailIcon from '../../assets/images/icons/gmail.svg'


const About = () => {
    return (
        <div className={style.aboutBlock}>
            <h3>Me in social</h3>
            <div className={style.iconsBlock}>
                <a href='https://github.com/aaxsti'><img src={githubIcon}/></a>
                <a href='https://linkedin.com/in/astapenko-maxim'><img src={linkedinIcon}/></a>
                <a href='https://vk.com/bladerunner1'><img src={vkIcon}/></a>
                <a href='https://t.me/astapenkomaxim'><img src={telegramIcon}/></a>
                <a href='mailto:3646824@gmail.com'><img src={gmailIcon}/></a>
            </div>
        </div>
    )
}

export default About;