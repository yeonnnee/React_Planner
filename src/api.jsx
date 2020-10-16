import axios from "axios";

export const authApi = {
  logIn: (user) => axios.post("api/auth/logIn", user),
  logOut: () => axios.post("api/auth/logOut"),
  checkAuth: () => axios.get("api/auth"),
};

export const signUpApi = {
  signUp: (userInfo) => axios.post("api/user/signUp", userInfo),
};
export const taskApi = {
  getTasks: () => axios.get("api/tasks"),
  postTask: (task) => axios.post("api/tasks", task),
  patchTask: (task) => axios.patch("api/tasks", task),
  deleteTask: (task) => axios.put("api/tasks", task),
};

export const monthlyApi = {
  getMonthly: () => axios.get("api/monthly/plan"),
  postPlan: (plan) => axios.post("api/monthly/plan/add", plan),
  updatePlan: (updatedPlan) =>
    axios.post(`api/monthly/plan/edit/${updatedPlan.id}`, updatedPlan),
  deletePlan: (plan) => axios.post(`api/monthly/plan/${plan.id}`, plan),
};

export const accountApi = {
  verification: (password) => axios.post("api/account/verification", password),
  patchPW: (password) => axios.patch("api/account/change/password", password),
  deleteAccount: () => axios.post("api/account/deleteAccount"),
};
