import { createSelector } from "reselect";

export const getCurrentRoute = createSelector(
  (state) => state.currentRoute,
  (currentRoute) => currentRoute
);
export const getSideMenuState = createSelector(
  (state) => state.app,
  (app) => app.isCollapsedSideMenu
);
export const getCurrentIdiom = createSelector(
  (state) => state.currentIdiom,
  (currentIdiom) => currentIdiom
);

export const getRoutes = createSelector(
  (state) => state.routes,
  (routes) => routes
);

export const getCovidForm = createSelector(
  (state) => state.covidForm,
  (covidForm) => covidForm
);

export const getCountries = createSelector(
  (state) => state.countries,
  (countries) => countries
);
