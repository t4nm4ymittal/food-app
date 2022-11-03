const express = require('express')
const app = express();
const userModel = require('./models/userModel');
const planModel = require('./models/planModel')
const cookieParser=require('cookie-parser')
app.use(express.json());
app.listen(3000);



const userRouter = require('./Routers/userRouter')
const authRouter = require('./Routers/authRouter')
const planRouter = require('./Routers/planRouter')
const reviewRouter=require('./Routers/reviewRouter')
const bookingRouter = require('./Routers/bookingRouter')
app.use('/user',userRouter)
app.use('/auth',authRouter)
app.use('/plans',planRouter)
app.use('/review',reviewRouter)
app.use('/booking',bookingRouter)
