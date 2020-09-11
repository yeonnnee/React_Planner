import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_START,
  ADD_TASKS,
  FINISHED_TASKS,
} from "../actions";

export const initialState = {
  isLoading: true,
  error: "",
  pendingList: [],
  finishedList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    //////////////////////* FETCH TASKS DATA REDUCER *////////////////
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS: {
      const filtered_PendingList = action.payload.filter(
        (task) => task.status === "PENDING"
      );
      const filtered_FinishedList = action.payload.filter(
        (task) => task.status === "FINISHED"
      );
      return {
        ...state,
        isLoading: false,
        pendingList: [...state.pendingList, ...filtered_PendingList],
        finishedList: [...state.finishedList, ...filtered_FinishedList],
      };
    }
    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong",
      };
    //////////////////////* TASKS REDUCER *////////////////
    case ADD_TASKS:
      return {
        ...state,
        isLoading: false,
        pendingList: [...state.pendingList, action.payload],
      };
    case FINISHED_TASKS: {
      const filtered_pendingList = state.pendingList.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        isLoading: false,
        pendingList: [...filtered_pendingList],
        finishedList: [...state.finishedList, action.payload],
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
