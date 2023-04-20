import { createSlice } from "@reduxjs/toolkit";
export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    employee: {},
    isLoading: false,
  },
  reducers: {
    getEmployeeFetch: (state) => {
      state.isLoading = true;
    },
    getEmployeesSuccess: (state, action) => {
      console.log(action.payload);
      state.employees = action.payload;
      state.isLoading = false;
    },
    getEmployeeSuccess: (state, action) => {
      console.log(action.payload);
      state.employee = action.payload;
      state.isLoading = false;
    },
    getEmployeeFailure: (state) => {
      console.log("error");
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = employeeSlice;
export const {
  getEmployeeFetch,
  getEmployeesSuccess,
  getEmployeeSuccess,
  getEmployeeFailure,
} = actions;
export default reducer;
