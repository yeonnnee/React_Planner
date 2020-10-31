require("dotenv").config();

const targetUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "localhost:3001";
  } else if (process.env.NODE_ENV === "production") {
    // https://api.planner.com/v1
    return "prodUrl";
  }
};

module.exports = targetUrl;
