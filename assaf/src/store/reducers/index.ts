import { combineReducers } from "redux";
import profileReducer from "./profiles";
import usersReducer from './users';

export default combineReducers({profiles: profileReducer, users: usersReducer});