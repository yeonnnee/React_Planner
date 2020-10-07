import axios from "axios";

export const authApi = {
  logIn: (user) => axios.post("api/auth/logIn", user),
  logOut: () => axios.post("api/auth/logOut"),
  checkAuth: () => axios.get("api/auth"),
};

export const signUpApi = {
  signUp: (userInfo) => axios.post("api/signUp/user/", userInfo),
};
export const taskApi = {
  getTasks: () => axios.get("api/tasks"),
  postTask: (task) => axios.post("api/tasks", task),
  patchTask: (task) => axios.patch("api/tasks", task),
  deleteTask: (task) => axios.put("api/tasks", task),
};

export const monthlyApi = {
  getMonthly: () => axios.get("api/monthly/plan"),
  postPlan: () => axios.get("api/monthly/plan/add"),
  planDetail: (id) => axios.get(`api/monthly/plan/${id}`),
};
