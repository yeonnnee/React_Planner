import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
import logInReducer from "./logInReducer";

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
  logInReducer,
});

export default rootReducer;
