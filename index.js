const express = require('express');
const ConnDB=require('./databases/conn.js');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const userRouter=require('./routers/userRouter.js');
const jobRouter=require('./routers/jobRouter.js');
const applicationRouter=require('./routers/applicationRouter.js');
const {errorMiddleware}=require('./middlewares/error.js');

const app=express();

ConnDB();




app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



//router
app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);


app.use(errorMiddleware);

app.listen(5000,()=>{
    console.log('Application running on port 5000');
})