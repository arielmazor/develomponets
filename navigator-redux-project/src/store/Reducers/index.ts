import { combineReducers } from "redux";
import StudentsReducer from "./Students";
import reducer from './Counter';
import UsersReducer from './users';

export default combineReducers({counter: reducer});