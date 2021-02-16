import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import moviesReducer from "./movies-reducer";
import thunkMiddleware from "redux-thunk";
import movieInfoReducer from "./movie-info-reducer";

let reducers = combineReducers({
    moviesPage: moviesReducer,
    movieInfoPage: movieInfoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;