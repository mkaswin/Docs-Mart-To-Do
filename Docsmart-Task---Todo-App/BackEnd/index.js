import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import logroute from './api/Schema/Router/LOginRoute.js'

const app = express ()
app.use(express.json())

app.use(
    cors({
   origin:"http://localhost:3000",
 credentials:true,  
}))

env.config()

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Connected to Database");
}).catch((err)=>{
  console.log(err);
})

app.listen(4000,()=>{
  console.log("server running on port 4000");
})

app.use("/api/login",logroute)
