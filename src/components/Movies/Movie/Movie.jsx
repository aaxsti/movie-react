import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JSON_DATA from "../../../MOCK_DATA.json";
import style from './SearchMovie.module.css';
import {NavLink} from "react-router-dom";

// MOVIES JSON
let moviesArray = require("../../../MOCK_DATA.json");
console.log(moviesArray);


const Movie = ({movie}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [value, setValue] = useState(0);

    // let parsedDate = new Date(props.premiereDate).toDateString().slice(3);
    // let genres = JSON_DATA
    // let joinedCastArray = JSON_DATA.actors.join(', ');

    let addToFavourites = (values) => {
        // props.addPost(values.newPostText);
        console.log('Button pushed');
    };

    return (
        <div className={style.movieBlock} key={movie.id}>
            <NavLink to={"/movieinfo/" + movie.id}>
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
                            <strong>Year:</strong> {movie.released.slice(-4)}
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