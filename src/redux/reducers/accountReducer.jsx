import {
  CHECK_VERIFICATION,
  CHECK_VERIFICATION_SUCCESS,
  RESET_VERIFICATION_RECORD,
  CHECK_VERIFICATION_FAILED,
  ACCOUNT_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
} from "../types";

export const initialState = {
  verification: false,
  confirmPassword: "",
  updatedPassword: "",
  confirmUpdatedPassword: "",
  isLoading: false,
  error: "",
  result: "",
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
    default:
      return state;
  }
};

export default accountReducer;
