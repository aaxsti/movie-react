import {moviesAPI} from "../api/api";

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

export const getUserProfile = (movieId) => async (dispatch) => {
    let response = await moviesAPI.getMovieInfo(movieId);
    dispatch(setMovieInfo(response.data));
}

export default movieInfoReducer;