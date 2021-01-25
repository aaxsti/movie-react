import React from 'react';
import style from './Movies.module.css';
import Movie from "./Movie/Movie";

const Movies = (props) => {
    let moviesElements = props.movies.map(m => <Movie
        movieTitle={m.movieTitle}
        director={m.director}
        premiereDate={m.premiereDate}
        imageSrc={m.imageSrc}
        cast={m.cast}/>)

    return (
        <div className={style.moviesBlock}>
            {moviesElements}
        </div>
    );
}

export default Movies;