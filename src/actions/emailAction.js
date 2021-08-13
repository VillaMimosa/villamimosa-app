import { URL } from "../constants";
import axios from "axios";

export const sendMail = (html) => {
  return async (dispatch) => {
    const response = await axios
      .post(`${URL}/rutas/correo`, { html })
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
