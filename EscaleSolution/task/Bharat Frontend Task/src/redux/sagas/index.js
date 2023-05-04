import { fork } from "redux-saga/effects";
import { watchEmployeesSaga } from "./employee/handlers/employees";
import { watchEmployeeSaga } from "./employee/handlers/employee";
import { watchOfficeSaga } from "./office/handlers/office";
import { watchCreateEmployeeSaga } from "./employee/handlers/createEmployee";
import { watchUpdateEmployeeSaga } from "./employee/handlers/UpdateEmployee";
import { watchDeleteEmployeeSaga } from "./employee/handlers/deleteEmployee";
// Root saga that will be run, we just fork the watcher sagas

export default function* RootSaga() {
  yield fork(watchEmployeesSaga);
  yield fork(watchEmployeeSaga);
  yield fork(watchCreateEmployeeSaga);
  yield fork(watchUpdateEmployeeSaga);
  yield fork(watchDeleteEmployeeSaga);

  yield fork(watchOfficeSaga);
}
