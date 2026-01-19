const User = require("../models/User");
const CF = require("../services/codeforces.service");

exports.trackUser = async (req, res) => {
  const { handle } = req.body;

  const info = await CF.getUserInfo(handle);
  const contests = await CF.getUserContests(handle);
  const solved = await CF.getSolvedProblems(handle);

  const user = await User.findOneAndUpdate(
    { handle },
    {
      handle,
      rating: info.rating,
      maxRating: info.maxRating,
      rank: info.rank,
      solvedCount: solved,
      contests
    },
    { upsert: true, new: true }
  );

  res.json(user);
};