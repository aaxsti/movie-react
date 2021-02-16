import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export const moviesAPI = {
    getMovies() {
        return instance.get(`/films`)
            .then(response => {
                return response.data;
            });
    },

    getMovieInfo(movieId) {
        // console.warn('Obsolete method. Please profileAPI object');
        return movieInfoAPI.getMovieInfo(movieId);
    }
};

export const movieInfoAPI = {
    getMovieInfo(movieId) {
        return instance.get(`films/${movieId}`);
    },
}