import { TRY_LOGIN, LOGIN_SUCCESS, LOG_OUT, AUTH_ERROR } from "../types";

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
    case AUTH_ERROR:
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
