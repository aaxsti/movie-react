import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';

let initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {...state, movies: action.movies};
        default:
            return state;
    }
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies});

export const requestMovies = () => async (dispatch) => {
    let data = await moviesAPI.getMovies();
    dispatch(setMovies(data));
}

export default moviesReducer;