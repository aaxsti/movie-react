import React, {useState} from 'react';
import style from './MovieInfo.module.css';
import {Button} from "@material-ui/core";
import MovieDataForm from "./MovieDataForm";

const MovieInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    return (
        <div>
            {editMode
                ? <MovieDataForm/>
                : <MovieData goToEditMode={() => {
                    setEditMode(true)
                }}/>}
        </div>
    );
}

const MovieData = (props) => {
    return (
        <div className={style.movieInfoWrapper}>
            <div className={style.movieInfoBlock}>
                <div className={style.moviePictureWrapper}>
                    <div className={style.inlineDiv}>
                        <img className={style.moviePicture}
                             src={'https://sun9-52.userapi.com/impg/npbO2jennMuYF8AJwoXWJz-3nnodqKnk4lXIZQ/s70BfOxgImk.jpg?size=940x942&quality=96&proxy=1&sign=e26cdb0dc4eeae86a9ccac9ee1afb108&type=album'}
                             alt="Dogville"/>
                    </div>
                    <div className={style.inlineDiv + ' ' + style.movieInfo}>
                        <h3 className={style.movieTitle}>
                            Dogville
                        </h3>
                        <hr/>
                        <div className={style.movieTagline}>
                            A quiet little town not far from here
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Director:</strong> Lars von Trier
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Released:</strong> 3 Jul 2003
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Runtime:</strong> 178 min
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Genre:</strong> Crime, Drama
                        </div>
                        <div className={style.movieInfoPart}>
                            <p><strong>Actors:</strong> Alain Delon, Renato Salvatori, Annie Girardot</p>
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Country:</strong> Denmark
                        </div>
                        <div className={style.movieInfoPart}>
                            <strong>Language:</strong> English
                        </div>
                    </div>
                </div>
                <div className={style.movieExtraInfo}>
                    <div className={style.moviePlot}>
                        <h4>Plot</h4>
                        <hr/>
                        <p>
                            A woman on the run from the mob is reluctantly accepted in a small Colorado community in
                            exchange for labor, but when
                            a search visits the town she finds out that their support has a price.
                        </p>
                        <hr/>
                    </div>
                    <div className={style.movieRating}>
                        <strong>Rating:</strong> 8.0
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