const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  handle: { type: String, required: true, unique: true },
  rating: Number,
  maxRating: Number,
  rank: String,
  solvedCount: Number,
  contests: Array
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);