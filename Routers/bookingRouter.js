const express = require('express')
const bookingRouter = express.Router();
const {protectRoute}=  require('../controller/authcontroller')
const { createSession } = require("../controller/bookingController");

bookingRouter.post('/createSession',protectRoute,createSession)
bookingRouter.get('/createSession',function(req,res){
      res.sendFile("C:/Users/tanmay/OneDrive/Desktop/NODE JS COURSE/food-app/booking.html")
})
module.exports=bookingRouter;


