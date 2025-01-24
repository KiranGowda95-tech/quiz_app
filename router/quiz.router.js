const express = require("express");
const authVerify = require("../middleware/authVerify");

const quizRouter = express.Router();
const quizzess = require("../db/quizzes");

quizRouter.route("/").get(authVerify, (req, res) => {
  res.json(quizzess);
  //res.send(quizzess.data)
});

module.exports = quizRouter;
