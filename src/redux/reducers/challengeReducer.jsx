import {
  ENROLLED_CHALLENGE,
  ENROLLED_CHALLENGE_SUCCESS,
  FETCH_CHALLENGE,
  FETCH_CHALLENGE_SUCCESS,
  SELECT_CHALLENGE,
  UPDATE_RECORD,
  DELETE_CHALLENGE,
  CHALLENGE_ERROR,
} from "../actions/challengeActions";

const initialState = {
  isLoading: false,
  enrolled: [],
  finished: [],
  challenges: [],
  selected: "",
  error: "",
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
    case ENROLLED_CHALLENGE: {
      return { ...state, isLoading: true };
    }
    case ENROLLED_CHALLENGE_SUCCESS:
      return { ...state, isLoading: false };
    case SELECT_CHALLENGE: {
      const selectedChallenge = state.challenges.find(
        (challenge) => challenge.id === action.payload
      );
      return { ...state, isLoading: false, selected: selectedChallenge };
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
    case DELETE_CHALLENGE:
      return { ...state, selected: "" };
    case CHALLENGE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
export default challengeReducer;
