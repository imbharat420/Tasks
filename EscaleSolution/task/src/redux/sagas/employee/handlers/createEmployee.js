import { call, put, takeEvery } from "redux-saga/effects";
import {
  getEmployeeFailure,
  getEmployeeSuccess,
} from "../../../features/employeeState";
import { requestCreateEmployee } from "../requests/employee";

function* worksGetEmployeeFetch(action) {
  console.log("handleGetEmployee", action);
  try {
    const response = yield call(requestCreateEmployee, action.payload);
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

export function* watchCreateEmployeeSaga() {
  yield takeEvery("CREATE_EMPLOYEE", worksGetEmployeeFetch);
}
