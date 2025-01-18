const express=require('express')
const quizzes=require("./db/quizzes")

const app=express()

const PORT=5000

app.get('/',(req,res)=>{
    res.send('user entered')
})

app.get("/quiz",(req,res)=>{
    res.send(quizzes)
})

app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}`)
})