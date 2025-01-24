const express = require("express");
const cors = require("cors");
//const userData = require("./db/users");
//const quizzes=require("./db/quizzes")

const quizRouter = require("./router/quiz.router");
const {loginRouter,signupRouter}=require('./router/auth.router');
const {authVerify} =require('./middleware/authVerify')

// const jwt = require("jsonwebtoken");
// const config = require("config");
//const crypto=require('crypto')

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("user entered");
});
//console.log(crypto.randomBytes(64).toString("hex"))
app.use("/quiz", quizRouter);

app.use("/auth/login", loginRouter);
app.use("/auth/signup",signupRouter);

// app.get("/quiz",(req,res)=>{
//     res.send(quizzes)
// })

app.listen(process.env.PORT || PORT, () => {
  console.log(`server is up and running on ${PORT}`);
});
