import React from 'react';
import style from './Movies.module.css';
import Movie from "./Movie/Movie";
import SearchBar from "../SearchBar/SearchBar";


const Movies = (props) => {
    // let moviesElements = props.movies.map(m => <Movie
    //     movieTitle={m.title}
    //     director={m.director}
    //     premiereDate={m.released}
    //     imageSrc={m.poster}
    //     cast={m.actors}/>)

    return (
            <Movie/>
    );
}

export default Movies;