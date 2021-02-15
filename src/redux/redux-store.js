import {applyMiddleware, combineReducers, createStore} from "redux";
import moviesReducer from "./movies-reducer";
import thunkMiddleware from "redux-thunk";
import movieInfoReducer from "./movie-info-reducer";

let reducers = combineReducers({
    moviesPage: moviesReducer,
    movieInfoPage: movieInfoReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;