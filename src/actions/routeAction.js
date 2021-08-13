import { keyBy } from "lodash";
import { SET_ALL_ROUTES, SET_COUNTRIES, URL } from "../constants";
import axios from "axios";
import { isArray, isObject } from "lodash";

export const fetchAllRoutes = () => {
  return async (dispatch) => {
    const response = await axios
      .get(`${URL}/Rutas`)
      .then((response) => {
        const routes = keyBy(response.data, "key");
        dispatch({ type: SET_ALL_ROUTES, payload: routes });
        return 200;
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_ALL_ROUTES, payload: {} });
        return err;
      });
    return response;
  };
};

export const formatCountries = (data) => {
  if (!data) {
    return [];
  }
  if (isArray(data)) {
    return data.map((countrie) => ({
      label: `${
        countrie.translations["es"]
          ? countrie.translations["es"]
          : countrie.name
      }`,
      value: `${
        countrie.translations["es"]
          ? countrie.translations["es"]
          : countrie.name
      }`,
    }));
  }
  if (isObject(data)) {
    return {
      label: `${data.name}`,
      value: `${data.name}`,
    };
  }
};

/* COUNTRIES */
export const fetchCountries = () => {
  return (dispatch) => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        const countries = formatCountries(response.data);
        dispatch({ type: SET_COUNTRIES, payload: countries });
      })
      .catch((err) => err);
  };
};
