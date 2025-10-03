const mongoose = require("mongoose")

const dbconnect = async(req,res) => {
    await mongoose.connect("mongodb://127.0.0.1/bookProj")
    console.log("database is connected")
}

module.exports = { dbconnect }