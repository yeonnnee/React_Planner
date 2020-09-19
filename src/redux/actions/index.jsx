/* TASKS ACTIONS */
export const FETCH_START = "[TASKS] fetching data start";
export const FETCH_SUCCESS = "[TASKS] fetching data success";
export const FETCH_FAILED = "[TASKS] fetching data failed";

export const ADD_TASKS = "[TASKS] add new tasks";
export const DELETE_TASKS = "[TASKS] delete tasks";
export const CHANGE_STATUS =
  "[TASKS] change task status to FINISHED or PENDING";

/* SIGN UP ACTIONS */
export const SET_USER_NAME = "[SIGN_UP] user name";
export const SET_USER_ID = "[SIGN_UP] user ID";
export const SET_USER_PASSWORD = "[SIGN_UP] user password";
export const SET_USER_CONFIRMPW = "[SIGN_UP] user confirm password";
export const SET_USER_EMAIL = "[SIGN_UP] user email";

export const SEND_DATA = "[SIGN_UP] send data to server";
export const SEND_DATA_SUCCESS = "[SIGN_UP] data saved successfully ";
export const SEND_DATA_FAILED = "[SIGN_UP] saving data falid ";

/* LOG IN ACTIONS */
export const SET_LOGIN_ID = "[LOG_IN] set user log-in ID";
export const SET_LOGIN_PASSWORD = "[LOG_IN] set user log-in PW";
export const TRY_LOGIN = "[LOG_IN] User log in";
export const LOGIN_FAILED = "[LOG_IN] failed to log-in";
export const LOGIN_SUCCESS = "[LOG_IN] Succeed to log-in";
