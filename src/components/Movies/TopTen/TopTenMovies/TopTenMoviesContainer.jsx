import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {requestMovies} from "../../../../redux/movies-reducer";
import {withRouter} from "react-router-dom";
import TopTenMovies from "./TopTenMovies";

class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.requestMovies();
    }

    render() {
        return (
            <TopTenMovies
                movies={this.props.movies}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.moviesPage.movies
    }
};

export default compose(
    connect(mapStateToProps, {requestMovies}),
    withRouter
)(MoviesContainer)