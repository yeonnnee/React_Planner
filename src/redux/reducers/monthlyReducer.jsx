import {
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  FETCH_MONTHLY_FAILED,
  CREATE_MONTHLY,
  READ_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
} from "../types";

const initialState = {
  isLoading: true,
  error: "",
  events: [],
};

const monthlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONTHLY_START: {
      return state;
    }
    case FETCH_MONTHLY_SUCCESS: {
      return state;
    }
    case FETCH_MONTHLY_FAILED: {
      return state;
    }
    case CREATE_MONTHLY: {
      return state;
    }
    case READ_MONTHLY: {
      return state;
    }
    case UPDATE_MONTHLY: {
      return state;
    }
    case DELETE_MONTHLY: {
      return state;
    }
    default:
      return state;
  }
};

export default monthlyReducer;
