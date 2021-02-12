import {moviesAPI as usersAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';

let initialState = {

};

const moviesReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_POST:
    //         let newPost = {
    //             id: 5,
    //             message: action.newPostText,
    //             likesCount: 0,
    //         };
    //         return {
    //             ...state,
    //             posts: [...state.posts, newPost],
    //             newPostText: ''
    //         };
    //     case SET_USER_PROFILE:
    //         return {
    //             ...state,
    //             profile: action.profile
    //         };
    //     case SET_STATUS:
    //         return {
    //             ...state,
    //             status: action.status
    //         };
    //     case DELETE_POST:
    //         return {
    //             ...state,
    //             posts: state.posts.filter(p => p.id !== action.postId)
    //         };
    //     default:
    //         return state;
    // }
    return state;
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies});

export const requestMovies = () => async (dispatch) => {
    let data = await usersAPI.getMovies();
    dispatch(setMovies(data.items));
}

export default moviesReducer;