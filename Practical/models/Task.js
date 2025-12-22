const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require :true
    },
    description: {
        type: String,
        require :true
    },
    user: {
       type: mongoose.Schema.Types.ObjectId, 
       ref: "User"
    }
})

const taskModel = mongoose.model("Task", taskSchema);
module.exports = { taskModel };