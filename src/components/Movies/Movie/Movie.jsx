import React from 'react';

import style from './Movie.module.css';

const Movie = (props) => {
    return (
        <div className={style.movieBlock}>
            <div className={style.moviePictureWrapper}>
                <img className={style.moviePicture} src={props.imageSrc}/>
            </div>

            {props.movieTitle} - {props.director}
        </div>
    );
}

export default Movie;