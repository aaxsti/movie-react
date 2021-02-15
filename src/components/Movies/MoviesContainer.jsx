import React from 'react';
import {connect} from "react-redux";
import Movies from "./Movies";
import {compose} from "redux";
import {getMovies} from "../../redux/movies.selectors";
import {requestMovies} from "../../redux/movies-reducer";

class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.requestMovies();
    }

    render() {
        return (
            <Movies
                movies={this.props.movies}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movies: getMovies(state)
    }
};

export default compose(
    connect(mapStateToProps, {requestMovies})
)(MoviesContainer)