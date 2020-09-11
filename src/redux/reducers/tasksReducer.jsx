import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_START,
  ADD_TASKS,
} from "../actions";

export const initialState = {
  isLoading: true,
  error: "",
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, ...action.payload],
      };
    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong",
      };
    case ADD_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default tasksReducer;
