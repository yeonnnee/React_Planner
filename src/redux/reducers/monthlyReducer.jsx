import {
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  EDIT_MONTHLY,
  CREATE_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
  SELECT_MONTHLY,
  CHANGE_MONTHLY,
  SAVE_MONTHLY,
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
    //* FETCH DATA ACTION *//
    case FETCH_MONTHLY_START: {
      const date = new Date().toString();
      const today = date.substring(0, 15);
      return { ...state, isLoading: true, date: today };
    }
    case FETCH_MONTHLY_SUCCESS: {
      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        // DISPLAY TODAY'S PLAN AS DEFAULT //
        const selected_plan = action.payload.filter(
          (plan) => plan.date === state.date
        );
        // DISPLAY OTHERS //
        const unSelected_plan = action.payload.filter((plan) => {
          const selectedDate = state.date.split(" ");
          const planDate = plan.date.split(" ");

          return (
            plan.date !== state.date &&
            planDate[1] === selectedDate[1] &&
            planDate[3] === selectedDate[3]
          );
        });

        // SORTED BY DATE //
        unSelected_plan.sort(function (a, b) {
          const day1 = a.date.split(" ")[2];
          const day2 = b.date.split(" ")[2];

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

    //* ACTIVE WHEN DATE SELECTED *//
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
      // SORTED BY DATE //
      unSelected_plan.sort(function (a, b) {
        const day1 = a.date.split(" ")[2];
        const day2 = b.date.split(" ")[2];

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
    case SAVE_MONTHLY: {
      return { ...state, isLoading: true };
    }

    //* ACTIVE MONTHLY CREATED *//
    case CREATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }

    //* ACTIVE WHEN EeditBtn CLICKED *//
    case EDIT_MONTHLY: {
      const target = state.plans.find((plan) => plan.id === action.payload);
      const filteredPlans = state.plans.filter(
        (plan) => plan.id !== action.payload
      );
      return { ...state, isEdit: target, plans: filteredPlans };
    }

    //* ACTIVE WHEN MONTHLY UPDATED *//
    case UPDATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }

    //* ACTIVE WHEN MONTHLY DELETED *//
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

    //* ACTIVE WHEN MONTH & YEAR CHANGED *//
    case CHANGE_MONTHLY: {
      const unSelected_plan = state.plans.filter((plan) => {
        const monthYear = action.payload.split(" ");
        const planDate = plan.date.split(" ");
        return (
          plan.date !== state.date &&
          planDate[1] === monthYear[0].substring(0, 3) &&
          planDate[3] === monthYear[1]
        );
      });
      // SORTED BY DATE //
      unSelected_plan.sort(function (a, b) {
        const day1 = a.date.split(" ")[2];
        const day2 = b.date.split(" ")[2];
        return +day1 - +day2;
      });
      return {
        ...state,
        monthYear: action.payload,
        unSelected: unSelected_plan,
      };
    }
    default:
      return state;
  }
};

export default monthlyReducer;
