require("dotenv").config();

module.exports = {
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production" ? "/next-playground" : "",
  "process.env.GITHUB_PERSONAL_ACCESS_KEY":
    process.env.GITHUB_PERSONAL_ACCESS_KEY
};
