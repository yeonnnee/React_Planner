import axios from "axios";

const api = axios.create({
  baseURL: "https://y-planner.herokuapp.com/",
});

export const authApi = {
  logIn: (user) => api.axios.post("api/auth/logIn", user),
  logOut: () => api.axios.post("/api/auth/logOut"),
  checkAuth: () => api.axios.get("api/auth"),
};

export const signUpApi = {
  signUp: (userInfo) => api.axios.post("api/user/signUp", userInfo),
};
export const taskApi = {
  getTasks: () => api.axios.get("api/tasks"),
  postTask: (task) => api.axios.post("api/tasks", task),
  patchTask: (task) => api.axios.patch("api/tasks", task),
  deleteTask: (task) => api.axios.put("api/tasks", task),
};

export const monthlyApi = {
  getMonthly: () => api.axios.get("api/monthly/plan"),
  postPlan: (plan) => api.axios.post("/api/monthly/plan/add", plan),
  updatePlan: (updatedPlan) =>
    api.axios.post(`/api/monthly/plan/edit/${updatedPlan.id}`, updatedPlan),
  deletePlan: (plan) => api.axios.post(`/api/monthly/plan/${plan.id}`, plan),
  getDetail: (planId) => api.axios.get(`/api/monthly/detail/${planId}`),
};

export const accountApi = {
  verification: (password) =>
    api.axios.post("/api/account/verification", password),
  patchPW: (password) =>
    api.axios.patch("/api/account/change/password", password),
  deleteAccount: (data) => api.axios.post("/api/account/delete", data),
  findPassword: (data) =>
    api.axios.post("/api/account/find-password/verification", data),
  resetPW: (data) =>
    api.axios.patch("/api/account/find-password/setPassword", data),
};

export const challengeApi = {
  getChallenges: () => api.axios.get("api/challenge"),
  getChallengeRecord: (id) => api.axios.get(`/api/challenge/record/${id}`),
  postChallenge: (data) => api.axios.post("/api/challenge/enrolled", data),
  updateStatus: (id) => api.axios.patch("api/challenge/update", id),
  checkDay: (target) => api.axios.patch("/api/challenge/check", target),
  deleteChallenge: (target) => api.axios.post("/api/challenge/delete", target),
};
