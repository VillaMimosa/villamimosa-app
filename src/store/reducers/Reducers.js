import { handleAction, handleActions } from "redux-actions";
import { IDIOMS } from "../../constants/idioms";
import {
  SET_SIDE_MENU_STATE,
  SET_REPORT_SHARED_DATA,
  SET_CURRENT_ROUTE,
  SET_CURRENT_IDIOM,
  SET_ALL_ROUTES,
  COVID_FORM_TOOGLE_LOADING,
  EDIT_SELECTED_COVID,
  CLOSE_COVID_FORM,
  OPEN_COVID_FORM,
  SET_COUNTRIES,
} from "./../../constants";
import { HOME_ROUTE_OBJECT } from "./../../constants/routes";

export const app = handleActions(
  {
    [SET_SIDE_MENU_STATE]: (state, action) => {
      return { ...state, isCollapsedSideMenu: action.payload };
    },
    [SET_REPORT_SHARED_DATA]: (state, action) => {
      const newState = {
        ...state,
        reportSharedData: {
          ...state.reportSharedData,
          ...action.payload,
        },
      };
      return newState;
    },
  },
  { isCollapsedSideMenu: true, reportSharedData: { currentDateFilter: null } }
);

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

export const routes = handleActions(
  {
    [SET_ALL_ROUTES]: (state, action) => action.payload,
  },
  null
);

export const covidForm = handleActions(
  {
    [OPEN_COVID_FORM]: (state) => ({
      show: !state.show,
      data: null,
      loading: false,
    }),
    [CLOSE_COVID_FORM]: () => ({ show: false, data: null, loading: false }),
    [EDIT_SELECTED_COVID]: (s, action) => ({
      show: true,
      data: action.payload,
      loading: false,
    }),
    [COVID_FORM_TOOGLE_LOADING]: (state) => ({
      ...state,
      loading: !state.loading,
    }),
  },
  { show: false, data: null, loading: false }
);

export const countries = handleActions(
  {
    [SET_COUNTRIES]: (s, action) => action.payload,
  },
  null
);
