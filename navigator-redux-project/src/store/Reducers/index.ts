import { combineReducers } from "redux";
import StudentsReducer from "./Students";
import StudentReducer from "./Student";
import reducer from './Students';

export default combineReducers({students: StudentsReducer, student: StudentReducer});