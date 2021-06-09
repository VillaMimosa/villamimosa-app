import { fetchAllRoutes } from "./routeAction";

/* INITAL DATA LOAD */
export const loadInitialData = () => {
    return async dispatch => {
        dispatch(fetchAllRoutes());
    };
};