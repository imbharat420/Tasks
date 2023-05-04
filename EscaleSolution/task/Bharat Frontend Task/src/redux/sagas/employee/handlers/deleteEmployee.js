import { call, put, takeEvery } from "redux-saga/effects";
import {
  getEmployeeFailure,
  getEmployeeSuccess,
} from "../../../features/employeeState";
import { requestDeleteEmployee } from "../requests/employee";

function* worksGetEmployeeFetch(action) {
  console.log("handleGetEmployee", action);
  try {
    const response = yield call(requestDeleteEmployee, action.payload);
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

export function* watchDeleteEmployeeSaga() {
  console.log("watchDeleteEmployeeSaga");
  yield takeEvery("DELETE_EMPLOYEE", worksGetEmployeeFetch);
}
