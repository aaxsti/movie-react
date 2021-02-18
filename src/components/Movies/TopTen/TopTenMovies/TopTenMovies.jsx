import React from 'react';
import Movie from "../../Movie/Movie";
import Preloader from "../../../common/Preloader/Preloader";

const TopTenMovies = ({movies}) => {

    if (!movies) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <h2>Top Movies</h2>
            </div>
            <div>
                {movies
                    .sort((a, b) => {
                        return b.rating.localeCompare(a.rating)
                    })
                    .slice()
                    .map(m => <Movie movie={m} key={m.id}/>)
                }
            </div>
        </div>
    )
}

export default TopTenMovies;