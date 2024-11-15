const express=require('express')
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
require('dotenv').config();
const PORT=process.env.PORT
app.use(morgan('dev'))
app.use(express.json());
const cors=require('cors')
require('./db/connection');
app.use(cors())


const todoRoutes=require('./route/todoRoutes')
app.use('/app',todoRoutes)

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);

});
