import {
  ENROLLED_CHALLENGE,
  ENROLLED_CHALLENGE_SUCCESS,
  FETCH_CHALLENGE,
  FETCH_CHALLENGE_FAIELD,
  FETCH_CHALLENGE_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  enrolled: [],
  finished: [],
  challenges: [],
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
    default:
      return state;
  }
};
export default challengeReducer;
