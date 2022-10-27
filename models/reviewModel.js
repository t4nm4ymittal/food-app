const mongoose = require('mongoose')
const emailValidator=require('email-validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const db_link="mongodb+srv://db_user:1234@cluster0.gwlvr4y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
 console.log(' review database connected')
 
})
.catch(function(err){
    console.log(err)
})

const reviewSchema = new mongoose.Schema({
    review:{
    type:String,
    required:[true,'review is required']
    },
    rating:{
        type:Number,
        min:1,
        max:10,
        required:[true,'rating is required']
    },
    createdAt:{
       type:Date,
       default:Date.now() 
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:[true,'review must belong to a user']
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        ref:'planModel',
        required:[true,'review must belong to a plan']
    }

})

reviewSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
      select: "name profileImage"
    }).populate("plan");
    next();
  });
const reviewModel = mongoose.model('reviewModel',reviewSchema)

// var review1 = new reviewModel({ review:'StreetFood',
//         rating:10,
//          plan:'6358270c4af9987ea669f16d',
//          user:"633ad8be7a2fabf197ca4750"})
//          review1.save(function (err,reviewModel) {
//             if (err) return console.error(err);
//             console.log(reviewModel.review + " saved to reviewModel collection.");
//           });          
module.exports = reviewModel