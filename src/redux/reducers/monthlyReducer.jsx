import {
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  FETCH_MONTHLY_FAILED,
  EDIT_MONTHLY,
  CREATE_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
  SELECT_MONTHLY,
  CREATE_MONTHLY_FAILED,
} from "../types";

const initialState = {
  isLoading: false,
  error: "",
  date: "",
  selected: [],
  unSelected: [],
  isEdit: "",
  plans: [],
};

const monthlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONTHLY_START: {
      const date = new Date().toString();
      const today = date.substring(0, 10);
      return { ...state, isLoading: true, date: today };
    }
    case FETCH_MONTHLY_SUCCESS: {
      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        const selected_plan = action.payload.filter(
          (plan) => plan.date === state.date
        );
        const unSelected_plan = action.payload.filter(
          (plan) => plan.date !== state.date
        );
        return {
          ...state,
          isLoading: false,
          selected: selected_plan,
          unSelected: unSelected_plan,
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
        date: action.payload,
        selected: selected_plan,
        unSelected: [...unSelected_plan],
      };
    }
    case CREATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }
    case CREATE_MONTHLY_FAILED: {
      return { ...state, error: action.payload };
    }
    case EDIT_MONTHLY: {
      const target = state.plans.find((plan) => plan.id === action.payload);
      return { ...state, isEdit: target };
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
