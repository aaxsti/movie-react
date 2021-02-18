import {moviesAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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

export const saveMovieInfo = (movieInfo) => async (dispatch, getState) => {
    const movieId = getState().auth.movieId;
    const response = await moviesAPI.saveMovieInfo(movieInfo);
    if (response.status === 200) {
        dispatch(getMovieInfo(movieId));
    } else {
        dispatch(stopSubmit("edit-movie-info", {_error: "Error!"}));
    }
}

export default movieInfoReducer;