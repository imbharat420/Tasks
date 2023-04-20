import { call, put, takeEvery } from "redux-saga/effects";
import {
  getOfficeSuccess,
  getOfficeFailure,
} from "../../../features/officeState";
import { requestGetOffice } from "../requests/office";

function* worksGetEmployeesFetch() {
  try {
    const response = yield call(requestGetOffice);
    const { data } = response;
    if (typeof data?.offices == "undefined") {
      throw new Error("No offices found");
    }
    yield put(getOfficeSuccess(data?.offices));
  } catch (error) {
    yield put(
      getOfficeFailure(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      )
    );
  }
}

export function* watchOfficeSaga() {
  yield takeEvery("GET_OFFICES", worksGetEmployeesFetch);
}
