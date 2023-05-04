import { call, put, takeEvery } from "redux-saga/effects";
import {
  getEmployeeFailure,
  getEmployeeSuccess,
} from "../../../features/employeeState";
import { requestUpdateEmployee } from "../requests/employee";

function* worksGetEmployeeFetch(action) {
  console.log("handleGetEmployee", action);
  try {
    const response = yield call(requestUpdateEmployee, action.payload);
    const { data } = response;
    console.log(data);
    yield put(getEmployeeSuccess(data));
  } catch (error) {
    yield put(
      getEmployeeFailure(
        error.response ? error.response.data : "Something went wrong"
      )
    );
  }
}

export function* watchUpdateEmployeeSaga() {
  yield takeEvery("UPDATE_EMPLOYEE", worksGetEmployeeFetch);
}
