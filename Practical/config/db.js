const mongoose = require("mongoose")

const dbconnect = async(req,res) => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("database is connected")
}

module.exports = { dbconnect }