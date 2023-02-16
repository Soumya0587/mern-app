const express = require("express");
const noteRouter = express.Router();


noteRouter.get("/",(req,res)=>{
    res.send("all the notes")
})

noteRouter.post("/create",(req,res)=>{
    res.send("post the notes")
})

noteRouter.delete("/delete/:id",(req,res)=>{
    res.send("delete the notes")
})

module.exports={noteRouter}