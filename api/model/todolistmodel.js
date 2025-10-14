const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    authorId:{
        type:String,
        required:true
    }
})

const todoModel = mongoose.model("todo", todoSchema)
module.exports = {todoModel}