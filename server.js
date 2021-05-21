const express=require ('express')
const app=express ()
const connectDB=require('./config/connectDB')
const UsertRouter=require('./routes/user')




app.use(express.json())
app.use('/api/users', UsertRouter)
connectDB()
const port=5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})