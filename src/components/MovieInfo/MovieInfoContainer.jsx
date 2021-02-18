import React from 'react';
import {withRouter} from "react-router-dom";
import MovieInfo from "./MovieInfo";
import {getMovieInfo, saveMovieInfo} from "../../redux/movie-info-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class MovieInfoContainer extends React.Component {

    refreshMovieInfo() {
        let movieId = this.props.match.params.movieId;
        this.props.getMovieInfo(movieId);
    }

    componentDidMount() {
        this.refreshMovieInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
            this.refreshMovieInfo();
        }
    }

    render() {
        return (
            <MovieInfo
                {...this.props}
                movieInfo={this.props.movieInfo}
                movieId={this.props.match.params.movieId}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        movieInfo: state.movieInfoPage.movieInfo
    });
}

export default compose(
    connect(mapStateToProps, {getMovieInfo, saveMovieInfo}),
    withRouter
)(MovieInfoContainer);