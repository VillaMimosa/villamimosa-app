import { combineReducers } from 'redux';
import { app, currentRoute, currentIdiom, routes } from "./Reducers";

export default combineReducers({
    app,
    currentRoute,
    currentIdiom,
    routes
});