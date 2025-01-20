const express=require('express')
const loginHandler=require('../controllers/authControllers')

//const userData=require('../db/users')
const loginRouter=express.Router()

loginRouter.route("/").post(loginHandler)

  module.exports=loginRouter;