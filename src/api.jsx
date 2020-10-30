import axios from "axios";

export const authApi = {
  logIn: (user) => axios.post("api/auth/logIn", user),
  logOut: () => axios.post("/api/auth/logOut"),
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
  postPlan: (plan) => axios.post("/api/monthly/plan/add", plan),
  updatePlan: (updatedPlan) =>
    axios.post(`/api/monthly/plan/edit/${updatedPlan.id}`, updatedPlan),
  deletePlan: (plan) => axios.post(`/api/monthly/plan/${plan.id}`, plan),
  getDetail: (planId) => axios.get(`/api/monthly/detail/${planId}`),
};

export const accountApi = {
  verification: (password) => axios.post("/api/account/verification", password),
  patchPW: (password) => axios.patch("/api/account/change/password", password),
  deleteAccount: (data) => axios.post("/api/account/delete", data),
  findPassword: (data) =>
    axios.post("/api/account/find-password/verification", data),
  resetPW: (data) =>
    axios.patch("/api/account/find-password/setPassword", data),
};

export const challengeApi = {
  getChallenges: () => axios.get("api/challenge"),
  getChallengeRecord: (id) => axios.get(`/api/challenge/record/${id}`),
  postChallenge: (data) => axios.post("/api/challenge/enrolled", data),
  updateStatus: (id) => axios.patch("api/challenge/update", id),
  checkDay: (target) => axios.patch("api/challenge/check", target),
  deleteChallenge: (target) => axios.post("/api/challenge/delete", target),
};
