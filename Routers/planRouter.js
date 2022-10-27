const express = require('express')
const planRouter = express.Router()
const {protectRoute, isAuthorised} = require('../controller/authcontroller')
const{getPlan,getAllPlans,createPlan,updatePlan,deletePlan,top3Plans}
= require('../controller/planController')

//own plan->logged in necessary
planRouter.use(protectRoute);
planRouter.route('/plan/:id')
.get(getPlan)

//all plans leke aayega
planRouter.route('/allPlans')
.get(getAllPlans)

//top3plans
planRouter.route('/top3').get(top3Plans)

//admin and restaurant owner can only create,update or delete plans
planRouter.use(isAuthorised(['admin','restaurant owner']));
planRouter
.route('/crudPlan/:id')
.post(createPlan)
.patch(updatePlan)
.delete(deletePlan)


module.exports =planRouter
