import React from 'react';
import style from './Movie.module.css';

const Movie = (props) => {

    let parsedDate = new Date(props.premiereDate).toDateString().slice(3);
    let joinedCastArray = props.cast.join(', ');

    return (
        <div className={style.movieBlock}>
            <div className={style.moviePictureWrapper}>
                <div className={style.inlineDiv}>
                    <img className={style.moviePicture} src={props.imageSrc}/>
                </div>
                <div className={style.inlineDiv + ' ' + style.movieInfo}>
                    <h3 className={style.movieTitle}>
                        {props.movieTitle}
                    </h3>
                    <div>
                        {props.director}
                    </div>
                    <div>
                        {parsedDate}
                    </div>
                    <div>
                        {joinedCastArray}
                    </div>
                    <div>
                        <button className={style.button}>Add to Favourites</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;