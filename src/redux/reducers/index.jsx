import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
});

export default rootReducer;
