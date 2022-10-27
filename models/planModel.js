//mongoose ke through connect monogodb
const mongoose = require('mongoose')
const db_link="mongodb+srv://db_user:1234@cluster0.gwlvr4y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
 console.log('plan db connected')
 
})
.catch(function(err){
    console.log(err)
})

const planSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        maxlength:[20,'Plan name should not exceed more than 20 characters']
    },
    duration:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:[true,'price not entered']
    },
    ratingAverage:{
        type:Number
    },
    discount:{
        type:Number,
        validate:[function(){
           return this.discount<100 
        },'discount should not exceed price']
    }

});
const planModel = mongoose.model('planModel',planSchema);
module.exports= planModel;
// (async function createPlan(){
//     let planObj={
//         name:'Superfood',
//         duration:30,
//         price:1000,
//         ratingAverage:5,
//         discount:20
//     }

// const doc = new planModel(planObj);
// await doc.save()})();

//model
