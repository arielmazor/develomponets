import { combineReducers } from "redux";
import StudentsReducer from "./students/students.reducer";

export default combineReducers({students: StudentsReducer});