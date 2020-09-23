import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import monthlyReducer from "./monthlyReducer";

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
  authReducer,
  monthlyReducer,
});

export default rootReducer;
