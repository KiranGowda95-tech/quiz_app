const express=require('express')
const {signupHandler,loginHandler}=require('../controllers/authControllers')

//const userData=require('../db/users')
const loginRouter=express.Router()
const signupRouter=express.Router()

loginRouter.route("/").post(loginHandler)
signupRouter.route("/").post(signupHandler)

  module.exports={loginRouter,signupRouter};