import { URL } from "../constants";
import axios from "axios";

export const sendMail = (data) => {
  return async (dispatch) => {
    const response = await axios
      //.post(`${URL}/rutas/correo`, data)
      .post(`${URL}/rutas/correo`, data)
      .then((response) => {
        return 200;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return response;
  };
};
