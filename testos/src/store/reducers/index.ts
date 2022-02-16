import { combineReducers } from "redux";
import teacher from "./teacher";
import usersReducer from './teacher';
import students from './students';
import lessons from './lessons'

export default combineReducers({teacher, students, lessons});