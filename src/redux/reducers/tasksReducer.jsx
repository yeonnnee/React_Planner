import {
  FETCH_SUCCESS,
  FETCH_START,
  ADD_TASKS,
  TASKS_ERROR,
  CHANGE_STATUS,
  DELETE_TASKS,
} from "../types";

export const initialState = {
  isLoading: false,
  error: "",
  pendingList: [],
  finishedList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    //////////////////////* FETCH TASKS DATA  *////////////////
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS: {
      if (action.payload === []) {
        return {
          ...state,
          isLoading: false,
        };
      } else {
        const filtered_PendingList = action.payload.filter(
          (task) => task.status === "PENDING"
        );
        const filtered_FinishedList = action.payload.filter(
          (task) => task.status === "FINISHED"
        );

        return {
          ...state,
          isLoading: false,
          pendingList: filtered_PendingList,
          finishedList: filtered_FinishedList,
        };
      }
    }

    //////////////////////* CRUD TASKS *////////////////

    case ADD_TASKS:
      return {
        ...state,
        pendingList: [...state.pendingList, action.payload],
      };
    case TASKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CHANGE_STATUS: {
      if (action.payload.status === "FINISHED") {
        const filtered_pendingList = state.pendingList.filter(
          (task) => task.id !== action.payload.id
        );
        return {
          ...state,
          pendingList: filtered_pendingList,
          finishedList: [...state.finishedList, action.payload],
        };
      } else {
        const filtered_FinishedList = state.finishedList.filter(
          (task) => task.id !== action.payload.id
        );
        return {
          ...state,
          pendingList: [...state.pendingList, action.payload],
          finishedList: filtered_FinishedList,
        };
      }
    }
    case DELETE_TASKS: {
      const filtered_PendingList = state.pendingList.filter(
        (task) => task.id !== action.payload.id
      );
      const filtered_FinishedList = state.finishedList.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        pendingList: filtered_PendingList,
        finishedList: filtered_FinishedList,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
