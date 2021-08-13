import { combineReducers } from "redux";
import {
  app,
  currentRoute,
  currentIdiom,
  routes,
  covidForm,
  countries,
} from "./Reducers";

export default combineReducers({
  app,
  currentRoute,
  currentIdiom,
  routes,
  covidForm,
  countries,
});
