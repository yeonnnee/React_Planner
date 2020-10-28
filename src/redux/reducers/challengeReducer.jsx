import {
  ENROLLED_CHALLENGE,
  ENROLLED_CHALLENGE_SUCCESS,
  FETCH_CHALLENGE,
  FETCH_CHALLENGE_FAIELD,
  FETCH_CHALLENGE_SUCCESS,
  SELECT_CHALLENGE,
  UPDATE_RECORD,
} from "../types";

const initialState = {
  isLoading: false,
  enrolled: [],
  finished: [],
  challenges: [],
  selected: "",
};

const challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHALLENGE: {
      return { ...state, isLoading: true };
    }
    case FETCH_CHALLENGE_SUCCESS: {
      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        const enrolledList = action.payload.filter(
          (list) => list.status === "ENROLLED"
        );
        const finishedList = action.payload.filter(
          (list) => list.status === "FINISHED"
        );
        return {
          ...state,
          isLoading: false,
          enrolled: enrolledList,
          finished: finishedList,
          challenges: [...action.payload],
        };
      }
    }
    case FETCH_CHALLENGE_FAIELD: {
      return { ...state, isLoading: false };
    }
    case ENROLLED_CHALLENGE: {
      return { ...state, isLoading: true };
    }
    case ENROLLED_CHALLENGE_SUCCESS:
      return { ...state, isLoading: false };
    case SELECT_CHALLENGE: {
      return { ...state, isLoading: false, selected: action.payload };
    }
    case UPDATE_RECORD: {
      const targetIndex = +action.payload.day.split("-")[1] - 1;
      const updatedRecord = [...state.selected.record];
      updatedRecord.splice(targetIndex, 1, action.payload);

      return {
        ...state,
        selected: {
          ...state.selected,
          record: updatedRecord,
        },
      };
    }
    default:
      return state;
  }
};
export default challengeReducer;
