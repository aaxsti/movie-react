import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';
const SET_NEW_MOVIE = 'SET_NEW_MOVIE';

let initialState = {
    movies: []
};

const updateMovie = (movies, movie) => {
    const movieIndex = movies.findIndex(movieToFind => movieToFind.id === movie.id);
    const newMovies = [...movies];
    newMovies[movieIndex] = movie;
    return newMovies;
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {...state, movies: action.movies};
        case SET_NEW_MOVIE:
            return {...state, movies: updateMovie(state.movies, action.movieInfo)}
        default:
            return state;
    }
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies});
export const setNewMovie = (movieInfo) => ({type: SET_NEW_MOVIE, movieInfo});

export const requestMovies = () => async (dispatch) => {
    let data = await moviesAPI.getMovies();
    dispatch(setMovies(data));
}

export default moviesReducer;