import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import moviesReducer from "./movies-reducer";
import thunkMiddleware from "redux-thunk";
import movieInfoReducer from "./movie-info-reducer";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    moviesPage: moviesReducer,
    movieInfoPage: movieInfoReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;