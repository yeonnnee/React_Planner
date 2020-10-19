import {
  TRY_LOGIN,
  LOGIN_SUCCESS,
  LOG_OUT,
  AUTH_ERROR,
  DELETE_ACCOUNT_SUCCESS,
} from "../types";

export const initialState = {
  user: "",
  name: "",
  isLoading: false,
  isAuthenticated: false,
  error: { status: "", msg: "" },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        isLoading: true,
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
        error: { status: "", msg: "" },
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: { status: action.payload.status, msg: action.payload.msg },
      };
    case DELETE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        user: "",
        name: "",
        isLoading: false,
        isAuthenticated: false,
        error: { status: "", msg: "" },
      };
    }
    default:
      return state;
  }
};

export default authReducer;
