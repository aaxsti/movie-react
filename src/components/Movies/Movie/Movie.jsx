import React from 'react';
import style from './SearchMovie.module.css';
import {NavLink} from "react-router-dom";

const Movie = ({movie}) => {
    return (
        <div className={style.movieBlock} key={movie.movieId}>
            <NavLink to={"/movieinfo/" + movie.movieId}>
                <div className={style.moviePictureWrapper}>
                    <div className={style.inlineDiv}>
                        <img className={style.moviePicture} src={movie.poster} alt=""/>
                    </div>
                    <div className={style.inlineDiv + ' ' + style.movieInfo}>
                        <h3 className={style.movieTitle}>
                            {movie.title}
                        </h3>
                        <hr/>
                        <div className={style.movieInfoPart}>
                            <strong>Director:</strong> {movie.director}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Year:</strong> { movie.released.substr(11, 4)}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Country:</strong> {movie.country}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Rating:</strong> {movie.rating} &#9734;
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Movie;