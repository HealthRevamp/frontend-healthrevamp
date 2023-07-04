import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  fetchSearch,
  fetchActivities,
  fetchActivity,
  fetchDataUser
} from "../slice/slice";
import { BASE_URL } from "../config/base-API";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const doLogin = (
  email,
  password,
  move,
  AlertSuccess,
  AlertFailed,
  storeData
) => {
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
      const data = await response.json();
      if (response.ok) {
        AlertSuccess();
        dispatch(fetchDataUser(data.data))
        storeData(data.access_token);
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

export const doSearch = (dataInput, token) => {
  return async (dispatch) => {
    try {
      // const response = await fetch(`${BASE_URL}/api/food-nutrition`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     access_token: token,
      //   },
      //   body: {
      //     searchFood: JSON.stringify(dataInput),
      //   },
      // });
      console.log(dataInput);
      dispatch(fetchDataStart());
      const { data } = await axios({
        method: "post",
        url: `${BASE_URL}/api/food-nutrition`,
        headers: {
          "Content-Type": "application/json",
          access_token: token,
        },
        data: {
          searchFood: dataInput,
        },
      });
      // const data = await response.json();
      dispatch(fetchDataSuccess());
      console.log(data);
      dispatch(fetchSearch(data));
      // console.log(response);
    } catch (error) {
      dispatch(fetchDataFailure(error));
      console.log(error);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const access_token = await AsyncStorage.getItem("access_token");
      const response = await fetch(`${BASE_URL}/api/activity`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: access_token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(fetchDataSuccess());
        dispatch(fetchActivities(data));
      } else {
        throw new Error("Failed to fetch activities");
      }
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const getChallengeById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const access_token = await AsyncStorage.getItem("access_token");
      const response = await fetch(`${BASE_URL}/api/activity/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: access_token,
        },
      });
      const data = await response.json();
      console.log(data);
      dispatch(fetchDataSuccess());
      dispatch(fetchActivity(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};
