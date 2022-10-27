const planModel = require('../models/planModel')

module.exports.getAllPlans=async function getAllPlans(req,res){
try{
let plans  = await planModel.find();
console.log(plans)
if(plans){
    return res.json({
        message:'all plans retrieved',
        data:plans
    })
}
else{
    return res.json({
        message:'plans not found',
        data:plans
    }) 
}
}
catch(err){
    res.status(500).json({
        message:err.message,
    })
}
}

module.exports.getPlan=async function getPlan(req,res){
    try{
    let id =   req.params.id;  
    let plans  = await planModel.findById();
    if(plans){
        return res.json({
            message:'plan retrieved',
            data:plans
        })
    }
    else{
        return res.json({
            message:'plan not found',
            data:plans
        }) 
    }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
    }

module.exports.createPlan=async function createPlan(req,res){
   try{ let planData = req.body;
    let createdPlan = await planModel.create(planData);
    return res.json({
        message:"Plan created successfully",
        data:createPlan
    })
}
catch(err){
    res.status(500).json({
        message:err.message
    })
}
}    

module.exports.deletePlan=async function deletePlan(req,res){
    try{ 
    let id = req.params.id;
     let deletedPlan = await planModel.findByIdAndDelete(id);
     return res.json({
         message:"Plan deleted successfully",
         data:deletedPlan
     })
 }
 catch(err){
     res.status(500).json({
         message:err.message
     })
 }
 }   

module.exports.updatePlan =  async function(req,res){
    try{
    let id = req.params.id;
    let dataToBeUpdated = req.body;
    let keys =[]
    for(let key in dataToBeUpdated){
        keys.push(key)

    }
    let plan = await planModel.findById(id)
    for(let key in keys){
         plan[key] = dataToBeUpdated[key]
    }
    await plan.save()
    return res.json({
        message:"Plan updated successfully",
        data:dataToBeUpdated
    })    
}

    catch(err){
        res.status(500).json({
            message:err.message
        })
}}


//get top3Plans

module.exports.top3Plans=async function top3Plans(req,res){
    try{
const top3Plans = await planModel.find().sort({
    ratingsAverage:-1

}).limit(3);
return res.json({
    message:"top3Plans",
    data:top3Plans
})

    }
    catch{
      res.status(500).json({
        message:err.message
      })
    }
}

