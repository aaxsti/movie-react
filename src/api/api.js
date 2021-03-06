import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000'
});

export const moviesAPI = {
    getMovies() {
        return instance.get(`/films`)
            .then(response => {
                return response.data;
            });
    },

    getMovieInfo(movieId) {
        return instance.get(`films/${movieId}`);
    },

    saveMovieInfo(movieInfo) {
        return instance.put(`films/${movieInfo.movieId}`, movieInfo);
    }
};
