const express = require("express")
const { connectDB } = require("./config/db")
const { userRouter } = require("./routes/userRoutes")
const app = express()
require('dotenv').config() 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/add", userRouter)

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "hello world"
  })
})

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("server is not connected")
    }
    connectDB()
    console.log("server is connected", process.env.PORT)
})