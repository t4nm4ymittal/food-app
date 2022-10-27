const express = require('express')
const authRouter = express.Router()
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')
const JWT_KEY=require('../secrets')

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp)


// authRouter
// .route('/login')
// //.post(loginUser)


function getSignUp(req,res,next){
    
    console.log("get sign up called");
    next()
   // res.sendFile('public/index2.html',{root:__dirname});

}

async function postSignUp(req,res){
    let dataObj = req.body;
    let user = await userModel.create(dataObj);
    console.log('backend',user);
    res.json({
        message:"User signed up",
        data:user

    })

}

module.exports = authRouter;
