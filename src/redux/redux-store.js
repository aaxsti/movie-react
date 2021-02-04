import {combineReducers, createStore} from "redux";
import moviesReducer from "./movies-reducer";
import favouritesReducer from "./favourites-reducer";

let reducers = combineReducers({
    moviesPage: moviesReducer,
    favouritesPage: favouritesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;