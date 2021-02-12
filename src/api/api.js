import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000',
    headers: {
        "API-KEY": "31c269a2-4de2-4018-98f9-0e5ea8f600fd"
    }
});

export const moviesAPI = {
    getMovies() {
        return instance.get(`/films`)
            .then(response => {
                return response.data;
            });
    }
};