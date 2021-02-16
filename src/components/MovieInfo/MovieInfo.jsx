import React, {useState} from 'react';
import style from './MovieInfo.module.css';
import {Button} from "@material-ui/core";
import MovieDataForm from "./MovieDataForm";
import Preloader from "../common/Preloader/Preloader";

const MovieInfo = ({movieInfo}) => {
    // console.log(movieInfo.co)
    let [editMode, setEditMode] = useState(false);

    if (!movieInfo) {
        return <Preloader/>
    }

    return (
        <div>

            {editMode
                ? <MovieDataForm movieInfo={movieInfo}/>
                : <MovieData movieInfo={movieInfo} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
        </div>
    );
}

const MovieData = ({movieInfo}) => {
    return (
        <div className={style.movieInfoWrapper}>
            <div className={style.movieInfoBlock}>
                <div className={style.moviePictureWrapper}>
                    <div className={style.inlineDiv}>
                        <img className={style.moviePicture}
                             src={movieInfo?.poster}
                             alt={movieInfo?.title}/>
                    </div>
                    <div className={style.inlineDiv + ' ' + style.movieInfo}>
                        <h3 className={style.movieTitle}>
                            {movieInfo?.title}
                        </h3>
                        <hr/>
                        <div className={style.movieTagline}>
                            {movieInfo?.tagline}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Director:</strong> {movieInfo?.director}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Released:</strong> {movieInfo?.released}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Runtime:</strong> {movieInfo?.runtime}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Genre:</strong> {movieInfo?.genre.join(', ')}
                        </div>
                        <div className={style.movieInfoPart}>
                            <p><strong>Actors:</strong> {movieInfo?.actors.join(', ')}</p>
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Country:</strong> {movieInfo?.country}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Language:</strong> {movieInfo?.language}
                        </div>
                    </div>
                </div>
                <div className={style.movieExtraInfo}>
                    <div className={style.moviePlot}>
                        <h4>Plot</h4>
                        <hr/>
                        <p>
                            {movieInfo?.plot}
                        </p>
                        <hr/>
                    </div>
                    <div className={style.movieRating}>
                        <strong>Rating:</strong> {movieInfo?.rating}
                    </div>
                </div>
            </div>
            <div className={style.editFormButtonWrapper}>
                <Button variant="outlined" onClick={() => {
                    alert(1)
                }} size={"small"}>Edit</Button>
            </div>
        </div>
    )
}

export default MovieInfo;