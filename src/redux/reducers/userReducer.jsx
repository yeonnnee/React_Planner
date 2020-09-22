import { SEND_DATA, SEND_DATA_FAILED, SEND_DATA_SUCCESS } from "../types";

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
    case SEND_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          userID: action.payload.userID,
          password: action.payload.password,
          confirmPassword: action.payload.confirmPassword,
          name: action.payload.name,
          email: action.payload.email,
        },
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
