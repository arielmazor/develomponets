import { combineReducers } from "redux";
import studentsReducer from "./students/students.reducer";
import studentsTestsReducer from './student-tests/student-tests.reducer';

export default combineReducers({students: studentsReducer, studentsTests: studentsTestsReducer});