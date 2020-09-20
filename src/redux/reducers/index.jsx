import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
  authReducer,
});

export default rootReducer;
