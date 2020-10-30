import {
  SEND_DATA,
  SIGNUP_ERROR,
  SEND_DATA_SUCCESS,
  VALIDATION_ERROR,
  CANCEL_SIGNUP,
} from "../types";

export const initialState = {
  isLoading: false,
  error: "",
  result: "",
  validation: {
    email: "",
    password: "",
    confirmPw: "",
    name: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        result: "FAILED",
        error: action.payload,
      };

    case VALIDATION_ERROR:
      if (!action.payload.email || action.payload.email) {
        return {
          ...state,
          isLoading: false,
          validation: { ...state.validation, email: action.payload.email },
        };
      }
      if (!action.payload.password || action.payload.password) {
        return {
          ...state,
          isLoading: false,
          validation: {
            ...state.validation,
            password: action.payload.password,
          },
        };
      }
      if (!action.payload.confirmPw || action.payload.confirmPw) {
        return {
          ...state,
          isLoading: false,
          validation: {
            ...state.validation,
            confirmPw: action.payload.confirmPw,
          },
        };
      }
      if (!action.payload.name || action.payload.name) {
        return {
          ...state,
          isLoading: false,
          validation: { ...state.validation, name: action.payload.name },
        };
      }
      return { ...state };
    case CANCEL_SIGNUP:
      return {
        ...state,
        isLoading: false,
        error: "",
        result: "",
        validation: {
          email: "",
          password: "",
          confirmPw: "",
          name: "",
        },
      };
    default:
      return state;
  }
};

export default userReducer;
