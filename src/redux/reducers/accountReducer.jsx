import {
  LOADING,
  CHECK_VERIFICATION,
  RESET_VERIFICATION_RECORD,
  UPDATE_PASSWORD_VALIDATION_ERROR,
  ACCOUNT_ERROR,
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
      return { ...state, verification: false, isLoading: false };
    }
    case LOADING: {
      return { ...state, isLoading: true };
    }
    case ACCOUNT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case CHECK_VERIFICATION: {
      return { ...state, isLoading: false, verification: true };
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
      return state;
    }
    default:
      return state;
  }
};

export default accountReducer;
