import { combineReducers } from "redux";
import profileReducer from "./profiles";

const rootReducer = combineReducers({profileReducer});

export default rootReducer;