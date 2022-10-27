const mongoose = require('mongoose')
const emailValidator=require('email-validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const db_link="mongodb+srv://db_user:1234@cluster0.gwlvr4y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
 console.log('database connected')
 
})
.catch(function(err){
    console.log(err)
})

//schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
         return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },    
    confirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){
            return this.confirmPassword==this.password
        }
    } ,
    role:{
        type:String,
        enum:['admin','user','restaurantowner','deliveryboy'],
        default:'user'

    },
    
        profileImage:{
             type:String,
             default:'img/users/default.jpeg'
              
        },
     resetToken:String
}
);

userSchema.methods.createResetToken = function(){
    //creating unique token using npm i crypto
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.resetToken=resetToken;
    return resetToken;
}

userSchema.methods.resetPasswordHandler = function(password,confirmPassword){
   this.password = password;
   this.confirmPassword = confirmPassword;
   this.resetToken = undefined;
}
//model
const userModel = mongoose.model('userModel',userSchema);

// (async function createUser(){
//     let user={
//         name:'Abhishek',
//         email:'abc@gmail.com',
//         password:'12345678',
//         confirmPassword:'12345678'
//     }
// let data = await userModel.create(user);
// console.log(data);

// })(); 

userSchema.pre('save',function(){
    this.confirmPassword=undefined
    console.log('before saving in db');
})

//  userSchema.pre ('save',async function(){
//     let salt  = await bcrypt.genSalt();
//     let hashedString =await  bcrypt.hash(this.password,salt);
//     this.password = hashedString
// })

userSchema.post('save',function(){
    console.log('after saving in db');
})
module.exports= userModel;