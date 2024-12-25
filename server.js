const express=require('express')
const mongoose=require('mongoose')
const dotEnv=require('dotenv')
const bodyparser=require('body-parser')
const employeeroute=require('./routes/emproutes')
const app=express()
const port=process.env.port||5000
dotEnv.config()
mongoose.connect(process.env.mongo_uri)
.then(()=>{
    console.log("DB Connected Successfully")
})
.catch((error)=>{
    console.log(error)
})
app.use(bodyparser.json())
app.use('/employees',employeeroute)

app.listen(port,()=>{
    console.log('server started')
})