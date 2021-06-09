import { handleAction, handleActions } from 'redux-actions';
import { IDIOMS } from '../../constants/idioms';
import { SET_SIDE_MENU_STATE, SET_REPORT_SHARED_DATA, SET_CURRENT_ROUTE, SET_CURRENT_IDIOM, SET_ALL_ROUTES } from './../../constants';
import { HOME_ROUTE_OBJECT } from './../../constants/routes';

export const app = handleActions({
    [SET_SIDE_MENU_STATE]: (state, action) => {
        return ({ ...state, isCollapsedSideMenu: action.payload });
    },
    [SET_REPORT_SHARED_DATA]: (state, action) => {
        const newState = {
            ...state,
            reportSharedData: {
                ...state.reportSharedData,
                ...action.payload
            }
        };
        return newState;
    }
}, { isCollapsedSideMenu: true, reportSharedData: { currentDateFilter: null } });

/* APP */
export const currentRoute = handleAction(
    SET_CURRENT_ROUTE,
    (state, action) => action.payload,
    HOME_ROUTE_OBJECT
);

export const currentIdiom = handleAction(
    SET_CURRENT_IDIOM,
    (state, action) => action.payload,
    IDIOMS[0]
);

export const routes = handleActions({
    [SET_ALL_ROUTES]: (state, action) => action.payload,
}, null);