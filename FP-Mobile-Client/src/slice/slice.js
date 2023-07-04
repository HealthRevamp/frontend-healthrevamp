import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../config/base-API";

export const getAllHabbits = createAsyncThunk(
  "Habbits/getAll",
  async (token) => {
    const response = await fetch(`${BASE_URL}/habits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
);

export const addHabbits = createAsyncThunk(
  "Habbits/addHabbit",
  async ({
    value,
    name,
    time,
    description,
    AlertSuccess,
    AlertFailed,
    move,
  }) => {
    const response = await fetch(`${BASE_URL}/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: value,
      },
      body: JSON.stringify({ name, time, description }),
    });
    const responseJson = await response.json();
    if (responseJson.ok) {
      AlertSuccess();
    } else {
      AlertFailed();
    }
    return responseJson;
  }
);

export const delHabbits = createAsyncThunk(
  "Habbits/deleteHabbit",
  async ({ value, id }) => {
    const idReq = id;
    const response = await fetch(`${BASE_URL}/habits/${idReq}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: value,
      },
    });
    const responseJson = await response.json();
    if (responseJson.ok) {
      AlertSuccess();
    } else {
      AlertFailed();
    }
    return responseJson;
  }
);

const initialState = {
  loading: false,
  error: null,
  searchResult: null,
  habbitsData: [],
  addhabit: [],
  dataDelete: [],
  user: {},
  activities: [],
  activity: [],
};

export const actionCreator = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSearch: (state, action) => {
      state.loading = false;
      state.error = null;
      state.searchResult = action.payload;
    },
    fetchActivities: (state, action) => {
      state.loading = false;
      state.activities = action.payload;
    },
    fetchActivity: (state, action) => {
      state.loading = false;
      state.activity = action.payload;
    },
    fetchDataUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getAllHabbits.pending]: (state) => {
      state.loading = true;
    },
    [getAllHabbits.fulfilled]: (state, action) => {
      state.loading = false;
      state.habbitsData = action.payload;
    },
    [getAllHabbits.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // add
    [addHabbits.pending]: (state) => {
      state.loading = true;
    },
    [addHabbits.fulfilled]: (state, action) => {
      state.loading = false;
      state.addhabit = action.payload;
    },
    [addHabbits.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    // deleted
    [delHabbits.pending]: (state) => {
      state.loading = true;
    },
    [delHabbits.fulfilled]: (state, action) => {
      state.loading = false;
      state.dataDelete = action.payload;
    },
    [delHabbits.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  fetchSearch,
  fetchActivities,
  fetchActivity,
  fetchDataUser
} = actionCreator.actions;

export default actionCreator.reducer;
