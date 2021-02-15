import React, {useState} from 'react';
import Movie from "./Movie/Movie";
import style from './Movies.module.css';

const Movies = ({movies}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={style.searchBox}>
            <input
                type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>

            <hr className={style.searchLine}/>
            {movies.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            })
                .map(m => <Movie movie={m} key={m.id}/>)
            }
        </div>
    )

}

export default Movies;