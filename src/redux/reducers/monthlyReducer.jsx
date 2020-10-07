import {
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  FETCH_MONTHLY_FAILED,
  CREATE_MONTHLY,
  READ_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
  SELECT_MONTHLY,
} from "../types";

const initialState = {
  isLoading: false,
  error: "",
  selected: [],
  unSelected: [],
  plans: [],
};

const monthlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONTHLY_START: {
      return { ...state, isLoading: true };
    }
    case FETCH_MONTHLY_SUCCESS: {
      const date = new Date();
      const today = date.subString(0, 10);

      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        const selected_plan = action.payload.filter(
          (plan) => plan.date === today
        );
        const unSelected_plan = action.payload.filter(
          (plan) => plan.date !== today
        );
        return {
          ...state,
          isLoading: false,
          selected: [...selected_plan],
          unSelected: [...unSelected_plan],
          plans: [...state.plans, ...action.payload],
        };
      }
    }
    case FETCH_MONTHLY_FAILED: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case SELECT_MONTHLY: {
      const selected_plan = state.plans.filter(
        (plan) => plan.date === action.payload
      );
      const unSelected_plan = state.plans.filter(
        (plan) => plan.date !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        selected: [...selected_plan],
        unSelected: [...unSelected_plan],
      };
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
