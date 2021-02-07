import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JSON_DATA from "../../../MOCK_DATA.json";
import style from './SearchMovie.module.css';
import {NavLink} from "react-router-dom";


// МАССИВ ВСЕХ ФИЛЬМОВ
let moviesArray = require("../../../MOCK_DATA.json");
console.log(moviesArray);

const TopTenMovies = (props) => {
    return (
        <div>toptenmovies</div>
    );
}

export default TopTenMovies;