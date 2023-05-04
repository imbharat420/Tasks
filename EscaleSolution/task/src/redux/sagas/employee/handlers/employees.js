import { call, put, takeEvery } from "redux-saga/effects";
import {
  getEmployeeFailure,
  getEmployeesSuccess,
} from "../../../features/employeeState";
import { requestGetEmployee } from "../requests/employees";

function* worksGetEmployeesFetch() {
  console.log("handleGetEmployee");
  try {
    const response = yield call(requestGetEmployee);
    const { data } = response;
    console.log(data, response);
    yield put(getEmployeesSuccess(data));
  } catch (error) {
    yield put(
      getEmployeeFailure(
        error.response ? error.response.data : "Something went wrong"
      )
    );
  }
}

export function* watchEmployeesSaga() {
  yield takeEvery("GET_EMPLOYEES", worksGetEmployeesFetch);
}
