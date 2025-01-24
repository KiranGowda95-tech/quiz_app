const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const { v4: uuid } = require("uuid");

const userData = require("../db/users");



const signupHandler = (req, res) => {
  const { username, password } = req.body;
  //check duplicate user
  const isUserPresent = userData.users.some(
    (user) => user.username === username
  );

  if (isUserPresent) {
    res.status(422).json({ message: "User Already Exists" });
  } else {
    const id = uuid();
    const newUser = { id, username, password };
    userData.users = [...userData.users, newUser];

    const token = jwt.sign({ id: username }, config.get("jwt_secret"));
    res.json({
      message: `Success - Created a new user -->${username}::${token}`,
    });
  }
};

const loginHandler = (req, res) => {
  const { username, password } = req.body;
  //console.log({username,password})
  //res.json({username,password,message:"got the values"})
  const isVerified = userData.users.some(
    (user) => user.username === username && user.password === password
  );
  if (isVerified) {
    const token = jwt.sign({ id: username }, config.get("jwt_secret"));
    res.json({ username, token, message: "User verified" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { signupHandler, loginHandler };
