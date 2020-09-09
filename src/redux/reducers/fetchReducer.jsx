import { FETCH_SUCCESS, FETCH_FAILED } from "../actions";

export const initialState = {
  isLoading: true,
  error: "",
  tasks: [],
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        error: "",
        tasks: [action.payload],
      };
    case FETCH_FAILED:
      return {
        isLoading: false,
        error: "Something went wrong",
        tasks: [],
      };

    default:
      return state;
  }
};

export default fetchReducer;
