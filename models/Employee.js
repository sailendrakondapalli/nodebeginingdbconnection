
const mongoose=require('mongoose')
const employeeschema=new mongoose.Schema({
    //name,mail,phone,city
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        default:false
    },
    city:{
        type:String
    }
})
module.exports=mongoose.model('Employee',employeeschema)