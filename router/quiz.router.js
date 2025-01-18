const express=require("express")

const quizRouter=express.Router()
const quizzess=require("../db/quizzes")

quizRouter.route('/').get((req,res)=>{
    res.json(quizzess)
    //res.send(quizzess.data)
})

module.exports=quizRouter