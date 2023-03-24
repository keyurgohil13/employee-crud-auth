import { combineReducers } from "redux";
import employeeReducer from "./employee.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
    employeeReducer,
    authReducer
});

export default rootReducer;