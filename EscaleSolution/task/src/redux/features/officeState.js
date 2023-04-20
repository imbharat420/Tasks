import { createSlice } from "@reduxjs/toolkit";
export const officeSlice = createSlice({
  name: "office",
  initialState: {
    offices: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getOfficeFetch: (state) => {
      state.isLoading = true;
    },
    getOfficeSuccess: (state, action) => {
      state.offices = action.payload;
      state.isLoading = false;
    },
    getOfficeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = officeSlice;
export const { getOfficeFetch, getOfficeSuccess, getOfficeFailure } = actions;
export default reducer;
