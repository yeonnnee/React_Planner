import {
  SET_LOGIN_ID,
  SET_LOGIN_PASSWORD,
  TRY_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../actions";

export const initialState = {
  user: {
    userID: "",
    password: "",
  },
  isLoading: false,
  error: "",
  logIn: false,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_ID:
      return {
        ...state,
        user: { ...state.user, userID: action.payload },
      };
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case TRY_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        logIn: true,
      };
  }
};

export default logInReducer;
