const userModel = require('../models/userModel');

module.exports.getUser=async function getUser(req,res){
    let id  = req.params.id;
    let user =  await userModel.findById(id);
    if(user)
    {
        return res.json(users)
    }
    else{
        return res.json({
            message:"User not found"
        })
    }
}
module.exports.updateUser=async function updateUser(req,res){
    //console.log("req.body->",req.body);
    try{
    let id = req.params.id;
    let user = await userModel.findById(id);
    let datatobeupdated = req.body;
    if(user)
    {
        const keys =[];
        for(let key in datatobeupdated){
            console.log(key);
            keys.push(key);
        }
        for(let i=0;i<keys.length;i++){
            console.log(keys[i]);
            user[keys[i]]=datatobeupdated[keys[i]]

        }
        console.log(user);
        
        const updatedData = await user.save();
        console.log(updatedData);
        res.json({
            message:"data updated successfully",
            data:updatedData,
          })
    }
    else{
         res.json({
            message:"User not found"
         })
    }
}
    // for(key in datatobeupdated){
    //     users[key] = datatobeupdated[key]
    // }  
  catch(err){
        res.json({
            message:err.message
        })
  }  
}
module.exports.deleteUser=async function deleteUser(req,res){
    try{
    let id  = req.params.id;
    let user  = await userModel.findByIdAndDelete(id);
    if(!user){
        res.json({
            message:"User not found"
        })
    }
    res.json({
        message:"data has been deleted",
        data:user
    })
    }
    catch(err)
    {
        res.json({
            message:err.message
        })
    }
};
module.exports.getAllUser=async function getAllUser(req,res){
    let users  = await userModel.find();
    if(users)
    {
        res.json({
            message:"Users retrieved",
            data:users
        })
    }
    
}







