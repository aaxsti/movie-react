import {createSelector} from "reselect";

const getMoviesSelector = (state) => {
    return state.moviesPage.movies;
}

export const getMovies = createSelector(getMoviesSelector, (movies) => {
    return movies.filter(m => true);
})