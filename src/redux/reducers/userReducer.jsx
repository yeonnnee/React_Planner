import {
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
  SET_USER_CONFIRMPW,
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USER_NAME,
  SET_USER_PASSWORD,
} from "../types";

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
      if (
        action.payload.includes("오") ||
        action.payload.includes("다") ||
        action.payload === ""
      ) {
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
          error: "내부 오류가 발생했습니다. 잠시 후에 다시 시도해주세요",
        };
      }

    default:
      return state;
  }
};

export default userReducer;
