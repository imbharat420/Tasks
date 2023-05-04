import employeeReducer from './features/employeeState';
import officeReducer from './features/officeState';

const rootReducer = {
    employee: employeeReducer,
    office: officeReducer
};

export default rootReducer;