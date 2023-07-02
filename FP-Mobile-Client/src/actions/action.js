import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slice/slice";
import { BASE_URL } from "../config/base-API";
export const doLogin = (email, password, move, AlertSuccess, AlertFailed) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      dispatch(fetchDataSuccess());

      if (response.ok) {
        AlertSuccess();
        move();
      } else {
        AlertFailed();
      }
    } catch (error) {
      dispatch(fetchDataFailure(error));
      AlertFailed();
    }
  };
};

export const doRegister = (
  username,
  email,
  password,
  height,
  width,
  move,
  AlertSuccess,
  AlertFailed
) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, height, width }),
      });
      dispatch(fetchDataSuccess());

      if (response.ok) {
        AlertSuccess();
        move();
      } else {
        AlertFailed();
      }
    } catch (error) {
      dispatch(fetchDataFailure(error));
      AlertFailed();
    }
  };
};
