import { combineReducers } from "redux";
import usersReducer from "./users-reducer/users.reducer";

export default combineReducers({users: usersReducer});