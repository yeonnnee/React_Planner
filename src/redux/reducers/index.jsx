import { combineReducers } from "redux";

import fetchReducer from "./fetchReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  fetchReducer,
  tasksReducer,
});

export default rootReducer;
