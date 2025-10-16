const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1/MovieProj")
    console.log("database is connected")
}

module.exports = {connectDB}