const express=require('express')
const router=express.Router()
const User=require("../models/User")

// router.get('/test',(req,res)=>{
//     res.send('this is test')
// })
router.post("/",async(req,res)=>{
    try {
        const {name, email, phone}=req.body
        if (!name||!email){
            return res.status(400).send("name and email are required")
        }
        const userr = await Contact.findOne({email})
        if (userr) {
            return res.status(400).send("user already exists")
        }
        const user=new  User ({name,email,phone})
        await user.save()
        res.status(200).send({msg:"user added", user})
        
        
    } catch (error) {
        res.status(500).send("impossible to add user")
        
    }
})
router.get("/",async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({msg:"all users", users})
    } catch (error) {
        res.status(500).send("impossible to get users")
        
    }
})
router.put("/:Id",async(req,res)=>{
    try {
        const {Id}=req.params
        const newUser= await User.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        res.status(200).send({msg:"user edited",newUser})
    } catch (error) {
        res.status(500).send("impossible to edit")
        
    }
})
router.delete("/:Id",async(req,res)=>{
    try {
        const {Id}=req.params
        await User.findOneAndDelete({_id:Id})
        res.status(200).send("user deleted")
    } catch (error) {
        res.status(500).send("impossible to delete")
    }
})
module.exports=router