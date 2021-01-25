import {combineReducers, createStore} from "redux";
import moviesReducer from "./movies-reducer";

let reducers = combineReducers({
    moviesPage: moviesReducer
});

let store = createStore(reducers);

window.store = store;

export default store;