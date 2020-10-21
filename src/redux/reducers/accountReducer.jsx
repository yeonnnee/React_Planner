import {
  CHECK_VERIFICATION,
  CHECK_VERIFICATION_SUCCESS,
  RESET_VERIFICATION_RECORD,
  CHECK_VERIFICATION_FAILED,
  UPDATE_PASSWORD_VALIDATION_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
} from "../types";

export const initialState = {
  verification: false,
  validation: {
    confirmPassword: "",
    updatedPassword: "",
  },
  isLoading: false,
  error: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_VERIFICATION_RECORD: {
      return { ...state, verification: false };
    }
    case CHECK_VERIFICATION: {
      return { ...state, isLoading: true };
    }
    case CHECK_VERIFICATION_SUCCESS: {
      return { ...state, isLoading: false, verification: true };
    }
    case CHECK_VERIFICATION_FAILED: {
      return { ...state, verification: false, isLoading: false };
    }
    case UPDATE_PASSWORD_VALIDATION_ERROR: {
      if (action.payload.password === "" || action.payload.password) {
        return {
          ...state,
          isLoading: false,
          validation: {
            ...state.validation,
            updatedPassword: action.payload.password,
          },
        };
      }
      if (action.payload.confirmPw === "" || action.payload.confirmPw) {
        return {
          ...state,
          isLoading: false,
          validation: {
            ...state.validation,
            confirmPassword: action.payload.confirmPw,
          },
        };
      }
      return { ...state };
    }
    case UPDATE_PASSWORD: {
      return { ...state, isLoading: true };
    }
    case UPDATE_PASSWORD_SUCCESS: {
      return { ...state, isLoading: false, verification: false };
    }
    case DELETE_ACCOUNT: {
      return { ...state, isLoading: true };
    }
    case DELETE_ACCOUNT_SUCCESS: {
      return { ...state, isLoading: false, verification: false };
    }
    default:
      return state;
  }
};

export default accountReducer;
