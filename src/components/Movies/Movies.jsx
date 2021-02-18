import React, {useState} from 'react';
import Movie from "./Movie/Movie";
import style from './Movies.module.css';
import Preloader from "../common/Preloader/Preloader";

const Movies = ({movies}) => {
    const [searchTerm, setSearchTerm] = useState('');

    if (!movies) {
        return <Preloader/>
    }

    return (
        <div>
            <input
                className={style.searchInput}
                type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>

            <hr className={style.searchLine}/>

            {movies
                .filter(val => {
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