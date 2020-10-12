import {
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  FAILED,
  EDIT_MONTHLY,
  CREATE_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
  SELECT_MONTHLY,
  CHANGE_MONTHLY,
} from "../types";

const initialState = {
  isLoading: false,
  error: "",
  monthYear: "",
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
      const today = date.substring(0, 15);
      return { ...state, isLoading: true, date: today };
    }
    case FETCH_MONTHLY_SUCCESS: {
      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        const selected_plan = action.payload.filter(
          (plan) => plan.date === state.date
        );
        const unSelected_plan = action.payload.filter((plan) => {
          const selectedDate = state.date.split(" ");
          const planDate = plan.date.split(" ");

          return (
            plan.date !== state.date &&
            planDate[1] === selectedDate[1] &&
            planDate[3] === selectedDate[3]
          );
        });

        unSelected_plan.sort(function (a, b) {
          const day1 = a.date.substring(9, 10);
          const day2 = b.date.substring(9, 10);
          return +day1 - +day2;
        });
        return {
          ...state,
          isLoading: false,
          selected: selected_plan,
          unSelected: unSelected_plan,
          plans: [...action.payload],
        };
      }
    }
    case FAILED: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case SELECT_MONTHLY: {
      const selected_plan = state.plans.filter(
        (plan) => plan.date === action.payload
      );
      const unSelected_plan = state.plans.filter((plan) => {
        const selectedDate = action.payload.split(" ");
        const planDate = plan.date.split(" ");

        return (
          plan.date !== action.payload &&
          planDate[1] === selectedDate[1] &&
          planDate[3] === selectedDate[3]
        );
      });
      unSelected_plan.sort(function (a, b) {
        const day1 = a.date.substring(9, 10);
        const day2 = b.date.substring(9, 10);
        return +day1 - +day2;
      });

      return {
        ...state,
        isLoading: false,
        date: action.payload,
        selected: selected_plan,
        unSelected: unSelected_plan,
      };
    }
    case CREATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }

    case EDIT_MONTHLY: {
      const target = state.plans.find((plan) => plan.id === action.payload);
      const filteredPlans = state.plans.filter(
        (plan) => plan.id !== action.payload
      );
      return { ...state, isEdit: target, plans: filteredPlans };
    }
    case UPDATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }
    case DELETE_MONTHLY: {
      const filtered_selected = state.selected.filter(
        (plan) => plan.id !== action.payload.id
      );
      const filtered_unSelected = state.unSelected.filter(
        (plan) => plan.id !== action.payload.id
      );
      const filteredPlans = state.plans.filter(
        (plan) => plan.id !== action.payload.id
      );
      return {
        ...state,
        selected: filtered_selected,
        unSelected: filtered_unSelected,
        plans: filteredPlans,
      };
    }
    case CHANGE_MONTHLY: {
      return state;
    }
    default:
      return state;
  }
};

export default monthlyReducer;
