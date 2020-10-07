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
  isLoading: false,
  error: "",
  plans: [],
  contents: [],
};

const monthlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONTHLY_START: {
      return { ...state, isLoading: true };
    }
    case FETCH_MONTHLY_SUCCESS: {
      return { ...state, isLoading: false, plans: [...action.payload] };
    }
    case FETCH_MONTHLY_FAILED: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case CREATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
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
