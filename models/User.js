const mongoose=require('mongoose')
const schema=mongoose.Schema



const userSchema=new Schema ({
    name : {type:String,require:true},
    email:{type:String,require:true},
    phone : Number       
})
module.exports=mongoose.model("User",userSchema)