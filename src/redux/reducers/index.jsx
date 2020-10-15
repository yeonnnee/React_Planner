import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import monthlyReducer from "./monthlyReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  tasksReducer,
  userReducer,
  authReducer,
  monthlyReducer,
  accountReducer,
});

export default rootReducer;
