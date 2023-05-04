import { call, put, takeEvery } from "redux-saga/effects";
import {
  getEmployeeFailure,
  getEmployeeSuccess,
} from "../../../features/employeeState";
import { requestGetEmployee } from "../requests/employee";

function* worksGetEmployeeFetch(action) {
  console.log("handleGetEmployee", action);
  try {
    const response = yield call(requestGetEmployee, action.payload);
    const { data } = response;
    console.log(data, response);

    if (data?.employees === null) {
      throw new Error("Employee not found");
    }
    yield put(getEmployeeSuccess(data.employees));
  } catch (error) {
    yield put(
      getEmployeeFailure(
        error.response ? error.response.data : "Something went wrong"
      )
    );
  }
}

export function* watchEmployeeSaga() {
  yield takeEvery("GET_EMPLOYEE", worksGetEmployeeFetch);
}
