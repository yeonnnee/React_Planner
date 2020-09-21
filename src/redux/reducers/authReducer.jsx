import {
  SET_LOGIN_ID,
  SET_LOGIN_PASSWORD,
  TRY_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAILED,
} from "../types";

export const initialState = {
  user: {
    userID: "",
    password: "",
  },
  isLoading: false,
  isAuthenticated: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_ID:
      return {
        ...state,
        user: { ...state.user, userID: action.payload },
      };
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case TRY_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      if (action.payload.includes("다") || action.payload === "") {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: "내부 오류가 발생했습니다. 잠시 후에 다시 시도해주세요",
        };
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOG_OUT:
      return {
        user: {
          userID: "",
          password: "",
        },
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
