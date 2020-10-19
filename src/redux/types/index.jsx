/* TASKS ACTIONS TYPES*/
export const FETCH_START = "[TASKS] FETCHING_DATA_START";
export const FETCH_SUCCESS = "[TASKS] FETCHING_DATA_SUCCESS";
export const FETCH_FAILED = "[TASKS] FETCHING_DATA_FAILED";

export const ADD_TASKS_SUCCESS = "[TASKS] ADD_TASKS_SUCCESS";
export const ADD_TASKS_FAILED = "[TASKS] ADD_TASKS_FAILED";
export const DELETE_TASKS = "[TASKS] DELETE_TASKS";
export const CHANGE_STATUS = "[TASKS] CHANGE_STATUS to FINISHED or PENDING";

/* SIGN UP ACTIONS TYPES*/
export const SEND_DATA = "[SIGN_UP] SEND_DATA_TO_SERVER";
export const SEND_DATA_SUCCESS = "[SIGN_UP] SEND_DATA_SUCCESS  ";
export const SEND_DATA_FAILED = "[SIGN_UP] SEND_DATA_FAILED ";
export const VALIDATION_ERROR = "[SIGN_UP] VALIDATION_ERROR";
export const CANCEL_SIGNUP = "[SIGN_UP] CANCEL";

/* AUTH ACTIONS TYPES*/

// LOGIN
export const TRY_LOGIN = "[AUTH] TRY_LOGIN";
export const AUTH_ERROR = "[AUTH] AUTH_ERROR";
export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS";

// LOG OUT
export const LOG_OUT = "[AUTH] LOG_OUT";

// ACCOUNT
export const CHECK_VERIFICATION = "[ACCOUNT] CHECK_VERIFICATION";
export const CHECK_VERIFICATION_SUCCESS =
  "[ACCOUNT] CHECK_VERIFICATION_SUCCESS";
export const CHECK_VERIFICATION_FAILED = "[ACCOUNT] CHECK_VERIFICATION_FAILED";
export const ACCOUNT_ERROR = "[ACCOUNT] ACCOUNT_ERROR";
export const RESET_VERIFICATION_RECORD = "[ACCOUNT] RESET_CHECK_USER_RECORD";

export const UPDATE_PASSWORD = "[ACCOUNT] UPDATE_PASSWORD";
export const UPDATE_PASSWORD_SUCCESS = "[ACCOUNT] UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_VALIDATION_ERROR =
  "[ACCOUNT] UPDATE_PASSWORD_VALIDATION_ERROR";

export const DELETE_ACCOUNT = "[ACCOUNT] DELETE_ACCOUNT";
export const DELETE_ACCOUNT_SUCCESS = "[ACCOUNT] DELETE_ACCOUNT_SUCCESS";

/* MONTHLY ACTIONS TYPES*/
export const FETCH_MONTHLY_START = "[MONTHLY] FETCH_MONTHLY_START ";
export const FETCH_MONTHLY_SUCCESS = "[MONTHLY] FETCH_MONTHLY_SUCCESS";
export const FAILED = "[MONTHLY] FAILED ";

export const SELECT_MONTHLY = "[MONTHLY] SELECT_MONTHLY";
export const CREATE_MONTHLY = "[MONTHLY] CREATE_MONTHLY_SUCCESS";
export const EDIT_MONTHLY = "[MONTHLY] EDIT_MONTHLY";
export const UPDATE_MONTHLY = "[MONTHLY] UPDATE_MONTHLY";
export const DELETE_MONTHLY = "[MONTHLY] DELETE_MONTHLY";
export const CHANGE_MONTHLY = "[MONTHLY] CHANGE_MONTHLY_MONTH_YEAR";
