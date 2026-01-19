const axios = require("axios");

const CF_BASE = "https://codeforces.com/api";

exports.getUserInfo = async (handle) => {
  const res = await axios.get(`${CF_BASE}/user.info?handles=${handle}`);
  return res.data.result[0];
};

exports.getUserContests = async (handle) => {
  const res = await axios.get(`${CF_BASE}/user.rating?handle=${handle}`);
  return res.data.result;
};

exports.getSolvedProblems = async (handle) => {
  const res = await axios.get(
    `${CF_BASE}/user.status?handle=${handle}`
  );
  const solved = new Set();
  res.data.result.forEach(sub => {
    if (sub.verdict === "OK") {
      solved.add(sub.problem.contestId + sub.problem.index);
    }
  });
  return solved.size;
};