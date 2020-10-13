import {
  TRY_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAILED,
} from "../types";

export const initialState = {
  user: "",
  name: "",
  isLoading: false,
  isAuthenticated: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        name: action.payload.name,
        isLoading: false,
        isAuthenticated: true,
      };

    case LOG_OUT:
      return {
        ...state,
        user: "",
        name: "",
        isLoading: false,
        isAuthenticated: false,
        error: "",
      };
    case LOG_OUT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
