import React, {useState} from 'react';
import style from './MovieInfo.module.css';
import MovieDataForm from "./MovieDataForm";
import Preloader from "../common/Preloader/Preloader";

const MovieInfo = ({movieInfo, saveMovieInfo}) => {
    let [editMode, setEditMode] = useState(false);

    if (!movieInfo) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveMovieInfo(formData);
        setEditMode(false);
    }

    movieInfo = {
        ...movieInfo, released : new Date(movieInfo.released).toISOString().substring(0,10)
    }

    return (
        <div>
            {editMode
                ? <MovieDataForm movieInfo={movieInfo} initialValues={movieInfo} onSubmit={onSubmit}/>
                : <MovieData movieInfo={movieInfo} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
        </div>
    );
}

const MovieData = ({movieInfo, goToEditMode}) => {
    console.log(movieInfo)
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
                        <hr/>
                        <div className={style.movieInfoPart}>
                            <strong>Director:</strong> {movieInfo?.director}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Released:</strong> {new Date(movieInfo?.released).toLocaleDateString()}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Runtime:</strong> {movieInfo?.runtime} min
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Genre:</strong> {movieInfo?.genre}
                        </div>
                        <div className={style.movieInfoPart}>
                            <p><strong>Actors:</strong> {Object.values(movieInfo?.actors).join(', ')}</p>
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Country:</strong> {movieInfo?.country}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Language:</strong> {movieInfo?.language}
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Awards:</strong> {movieInfo?.awards}
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
                <button onClick={goToEditMode}>Edit</button>
            </div>
        </div>
    )
}

export default MovieInfo;