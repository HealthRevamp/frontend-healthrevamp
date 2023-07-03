import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  searchResult: null
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
      state.searchResult = action.payload
    }
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchSearch } =
  actionCreator.actions;

export default actionCreator.reducer;
