const path = require("path");
const User = require("../models/userModel");
const Expense = require("../models/expenseModel");
const sequelize = require("../util/database");

exports.getLeaderboardPage = async (req, res, next) => {
  try {
    res.sendFile(
      path.join(__dirname, "../", "public", "views", "leaderboard.html")
    );
  } catch {
    (err) => console.log(err);
  }
};