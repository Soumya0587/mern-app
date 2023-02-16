const express = require("express")
const app=express()
const {connection}=require("./config/db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")
const {authenticate}=require("./middilewares/authenticate.middileware")
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection 
        console.log("connected to db")
    }catch(err){
        console.log(err);
    }
    console.log(`server is running at ${process.env.port}`);
})