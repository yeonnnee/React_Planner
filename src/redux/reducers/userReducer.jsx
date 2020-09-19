import {
  LOG_IN,
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
  SET_USER_CONFIRMPW,
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USER_NAME,
  SET_USER_PASSWORD,
} from "../actions";

export const initialState = {
  user: {
    userID: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
  },
  isLoading: false,
  error: "",
  result: "",
  logIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        user: { ...state.user, userID: action.payload },
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case SET_USER_CONFIRMPW:
      return {
        ...state,
        user: { ...state.user, confirmPassword: action.payload },
      };
    case SET_USER_NAME:
      return {
        ...state,
        user: { ...state.user, name: action.payload },
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case SEND_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: "SUCCESS",
      };
    case SEND_DATA_FAILED:
      if (action.payload.includes("오") || action.payload.includes("다")) {
        return {
          ...state,
          isLoading: false,
          result: "FAILED",
          error: action.payload,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          result: "FAILED",
          error: "에러가 발생했습니다. 잠시 후 다시 실행해주십시오",
        };
      }

    case LOG_IN:
      return {
        ...state,
        logIn: true,
        result: "SUCCESS",
      };
    default:
      return state;
  }
};

export default userReducer;
