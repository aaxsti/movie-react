import React from 'react';
import {connect} from "react-redux";
import Movies from "./Movies";


let mapStateToProps = (state) => {
    return {
        movies: state.moviesPage.movies
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (newPostText) => {
//             dispatch(addPostActionCreator(newPostText));
//         }
//     }
// };

const MoviesContainer = connect(mapStateToProps, null)(Movies);

export default MoviesContainer;