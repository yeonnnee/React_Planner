import {
  CHECK_USER,
  CHECK_USER_SUCCESS,
  RESET_CHECK_USER_RECORD,
  CHECK_USER_FAILED,
} from "../types";

export const initialState = {
  check: false,
  confirmPassword: "",
  updatedPassword: "",
  confirmUpdatedPassword: "",
  isLoading: false,
  error: "",
  result: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_CHECK_USER_RECORD: {
      return { ...state, check: false };
    }
    case CHECK_USER: {
      return { ...state, isLoading: true };
    }
    case CHECK_USER_SUCCESS: {
      return { ...state, isLoading: false, check: true };
    }
    case CHECK_USER_FAILED: {
      return { ...state, check: false, isLoading: false };
    }
    default:
      return state;
  }
};

export default accountReducer;
