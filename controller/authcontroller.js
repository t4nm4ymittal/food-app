const express = require('express')
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')
const {JWT_KEY}=require('../secrets')

//sign up user
module.exports.signup=async function signup(req,res)
{  try{
    let dataObj = req.body
    let user = await userModel.create(dataObj)
    
    if(user)
    {
    res.json({
        message:"User signed up",
        data:user
    })
    }
    else{
        res.json({
            message:"error while signing up"
        })
    }
}
catch(err)
{
    res.json({
        message:err.message
    })
}
}

//login user
module.exports.login=async function login(req,res){
    try
    {
    let data = req.body
    if(data.email)
    {
    let user = await userModel.findOne({email:data.email});
    if(user){
        if(user.password==data.password)
{
   
    let uid  = user['_id']
    let token= jwt.sign({payload:uid},JWT_KEY)
    res.cookie('login',token,{httpOnly:true})
    return res.json({
        message:'User has logged in',
        data:user,
    })
}
    
    else{
        return res.json({
            message:'wrong credentials'
        });
    }
}
else {
    return res.json({
      message: "User not found",
    });
    }}
else{
    return res.json({
        message:"Empty field found"
    })
}
}
catch(err){
    return res.status(500).json({
        message:err.message
    })
}
};

//isAuthorised to check the user's role

module.exports.isAuthorised=function isAuthorised(roles){
    return function(req,res,next){
        if(roles.includes(req.role)==true)
        next()
        else{
            res.status(401).json({
                message:"Operation not allowed"
            })
        }
    }

}

//protectRoute
module.exports.protectRoute=async function protectRoute(req,res,next){
    try{
    let token;
    if(req.cookies.login)
    {     token = req.cookies.login;
        let payload=jwt.verify(token,JWT_KEY)
        if(payload){
            console.log("payload token", payload);    
        const user = await userModel.findById(payload.payload);
        req.role = user.role
        req.id = user.id
        console.log(req.role, req.id)
        next()
        }
        else
        {
            return res.json({
           message:"Please login again"
                           })
        }
    }
    const client  = req.get('User-Agent');
    if(client.includes("Mozilla")==true)
    res.redirect('/login')
    else{
        return res.json({
            message:"Operation not allowed"
        });
        
    }
}
catch(err)
{
    return res.json({
        message:err.message,
    });

}
};

//forgetPassword
module.exports.forgetpassword=async function forgetPassword(req,res){
    let{email} = req.body;
    try{
         if(user){
         //resetToken is used to create new token   
         const user = await userModel.findOne({email:email})
         const resetToken = user.createResetToken();
         let resetPasswordLink = `${req.protocol}://${req.get("host")}${resetToken}`
         //send email to user
         //by nodemailer
    }
    else{
        return res.json({
            message:"Please signup"
        });
    }
}
catch(err){
    res.status(500).json({
       message:err.message
    });
}
}

//resetPassword
module.exports.resetpassword=async function resetPassword(req,res){
    try
    {
    const token = req.params.token;
    let {password,confirmpassword} = req.body;
    const user = await userModel.findOne({resetToken:token});
    //resetPasswordHandler will update user password in db
    if(user)
    {
    user.resetPasswordHandler(password,confirmpassword);
    await user.save();
    res.json({
        message:"User password changed successfully please login again"
    })
}
   else{
    res.json({
        message:"User not found"
    })
   }
}
catch(err){
    res.json({
        message:err.message
    })
}
}
//logout
module.exports.logout=function logout(req,res){
    res.cookie('login',' ',{maxAge:1});
    res.json({
        message:"User logout successfully"

    })
}