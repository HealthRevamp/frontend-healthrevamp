import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slice/slice";

export const doLogin = (email, password, move, AlertSuccess, AlertFailed) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const response = await fetch(
        "https://4f8e-103-138-68-174.ap.ngrok.io/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
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
      const response = await fetch(
        "https://4f8e-103-138-68-174.ap.ngrok.io/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, height, width }),
        }
      );
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
