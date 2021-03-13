import React from 'react';
import Movie from "../../Movie/Movie";
import Preloader from "../../../common/Preloader/Preloader";
import style from "./TopTenMovies.module.css"

const TopTenMovies = ({movies}) => {

    if (!movies) {
        return <Preloader/>
    }

    return (
        <div>
            <h3 className={style.topMoviesHeader}>Top <span className={style.tenNumberHeader}>10</span> Movies</h3>
            <div>
                {movies
                    .sort((a, b) => {
                        return b.rating.localeCompare(a.rating)
                    })
                    .slice(0, 10)
                    .map((m, i) => <div><hr/><h2 className={style.topMovieNumber}>{++i} &nbsp;</h2><Movie movie={m} key={m.id}/><br/><br/><br/></div>)
                }
            </div>
        </div>
    )
}

export default TopTenMovies;