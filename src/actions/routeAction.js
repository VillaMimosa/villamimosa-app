import { keyBy } from 'lodash';
import { SET_ALL_ROUTES, URL } from '../constants';
import axios from "axios";

export const fetchAllRoutes = () => {
    return async dispatch => {
        const response = await
            axios.get(`${URL}/Rutas`).then(response => {
                const routes = keyBy(response.data, 'key');
                dispatch({ type: SET_ALL_ROUTES, payload: routes });
                return 200;
            }).catch(err => {
                console.log(err)
                dispatch({ type: SET_ALL_ROUTES, payload: {} });
                return err
            });
        return response;
    };
};