const express=require('express')
const cors=require("cors")
//const quizzes=require("./db/quizzes")
const quizRouter=require("./router/quiz.router")
const app=express()

app.use(cors())

app.use("/quiz",quizRouter)

const PORT=5000

app.get('/',(req,res)=>{
    res.send('user entered')
})

// app.get("/quiz",(req,res)=>{
//     res.send(quizzes)
// })

app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`)
})