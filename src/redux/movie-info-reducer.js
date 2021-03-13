import {moviesAPI} from "../api/api";
import {setNewMovie} from "./movies-reducer";

const SET_MOVIE_INFO = 'SET_MOVIE_INFO';


let initialState = {
    movieInfo: null
};

const movieInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_INFO:
            return {
                ...state,
                movieInfo: action.movieInfo
            };
        default:
            return state;
    }
}

export const setMovieInfo = (movieInfo) => ({type: SET_MOVIE_INFO, movieInfo});


export const getMovieInfo = (movieId) => async (dispatch) => {
    let response = await moviesAPI.getMovieInfo(movieId);
    dispatch(setMovieInfo(response.data));
}

export const saveMovieInfo = (movieInfo) => async (dispatch) => {
    const response = await moviesAPI.saveMovieInfo(movieInfo);
    dispatch(setMovieInfo(response.data))
    dispatch(setNewMovie(response.data))
}

export default movieInfoReducer;