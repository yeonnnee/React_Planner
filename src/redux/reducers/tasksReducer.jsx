import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED,
  CHANGE_STATUS,
  DELETE_TASKS,
} from "../types";

export const initialState = {
  isLoading: true,
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
          pendingList: [...state.pendingList, ...filtered_PendingList],
          finishedList: [...state.finishedList, ...filtered_FinishedList],
        };
      }
    }
    case FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //////////////////////* CRUD TASKS *////////////////

    case ADD_TASKS_SUCCESS:
      console.log("payload", action.payload);
      return {
        ...state,
        isLoading: false,
        pendingList: [...state.pendingList, action.payload],
      };
    case ADD_TASKS_FAILED:
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
          isLoading: false,
          pendingList: [...filtered_pendingList],
          finishedList: [...state.finishedList, action.payload],
        };
      } else {
        const filtered_FinishedList = state.finishedList.filter(
          (task) => task.id !== action.payload.id
        );
        return {
          ...state,
          isLoading: false,
          pendingList: [...state.pendingList, action.payload],
          finishedList: [...filtered_FinishedList],
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
        isLoading: false,
        pendingList: [...filtered_PendingList],
        finishedList: [...filtered_FinishedList],
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
