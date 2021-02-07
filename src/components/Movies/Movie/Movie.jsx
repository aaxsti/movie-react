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
const Movie = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [value, setValue] = useState(0);

    let parsedDate = new Date(props.premiereDate).toDateString().slice(3);
    // let genres = JSON_DATA
    // let joinedCastArray = JSON_DATA.actors.join(', ');

    let addToFavourites = (values) => {
        // props.addPost(values.newPostText);
        console.log('Button pushed');
    };

    return (
        <div className={style.searchBox}>
            <input
                type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>
            {JSON_DATA.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className={style.movieBlock} key={key}>
                        <NavLink to="/movieinfo">
                            <div className={style.moviePictureWrapper}>
                                <div className={style.inlineDiv}>
                                    <img className={style.moviePicture} src={val.poster} alt=""/>
                                </div>
                                <div className={style.inlineDiv + ' ' + style.movieInfo}>
                                    <h3 className={style.movieTitle}>
                                        {val.title}
                                    </h3>
                                    <hr/>
                                    <div className={style.movieInfoPart}>
                                        <strong>Director:</strong> {val.director}
                                    </div>
                                    <div className={style.movieInfoPart}>
                                        <strong>Year:</strong> {val.year}
                                    </div>
                                    <div className={style.movieInfoPart}>
                                        <strong>Country:</strong> {val.country}
                                    </div>
                                    <div className={style.movieInfoPart}>
                                        <strong>Rating:</strong> {val.rating} &#9734;
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
}

export default Movie;