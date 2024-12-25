
const Employee=require('../models/Employee')

const createemp=async(req,res)=>{
    try{
        const { name,email,phone,city }=req.body
    const emp=new Employee({
        name,
        email,
        phone,
        city
    })
    await emp.save()
    res.status(201).json(Employee)
    }catch(error){
        console.log(error)
        res.status(500).jason({message:'ServerError'})
    }
}

const getemp=async(req,res)=>{
    try{
        const employie= await Employee.find() 
        res.status(200).json (employie)
    }catch (error){
        console.log("there is an errror",error)
        res.status(500).jason({message:'ServerError'})
    }
}
const singleemp=async(req,res)=>{
    try{
        const employie= await Employee.findById(req.params.id) 
        if (!employie){
            return res.status(404).json({message:"Not Found"})
        }
        res.status(200).json(employie)
    }catch(error){
console.error(error)
res.status(500).json({message:"server error"})
    }
}
const updateemp=async(req,res)=>{
    try{
        const{ name,email,phone,city}=req.body
        const myemp=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        )
        if(!myemp){
            return res.status(404).json({message:"Not Found"})
        }
        res.status(200).json(myemp)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}
const deleteemp=async(req,res)=>{
    try{
        const deleteemp=await Employee.findByIdAndDelete(
            req.params.id
        )
        res.status(204).send()
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}
module.exports={createemp ,getemp, singleemp ,updateemp,deleteemp}