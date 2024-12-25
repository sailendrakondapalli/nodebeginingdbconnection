const express=require('express')
const router=express.Router()
const employeecontroller=require('../controllers/employeeController')
const emp=require('../models/Employee')

//get,post,put,dlt
router.post('/add-emp',employeecontroller.createemp)
router.get('/allemp',employeecontroller.getemp)
router.get('/employie/:id',employeecontroller.singleemp)
router.put('/update/:id',employeecontroller.updateemp)
router.delete('/delete/:id',employeecontroller.deleteemp)


module.exports=router