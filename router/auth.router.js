const express=require('express')
const jwt=require('jsonwebtoken')

const userData=require('../db/users')

const loginRouter=express.Router()

loginRouter.route("/").post((req, res) => {
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
  })

  module.exports=loginRouter;