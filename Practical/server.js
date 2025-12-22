const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const { dbconnect } = require("./config/db")
const authRouter = require("./routes/authRoutes")
const taskRouter = require("./routes/taskRoutes")

const app = express()
require("dotenv").config()
 
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static("public"))

app.use("/", authRouter)
app.use("/task", taskRouter)

app.listen(process.env.PORT, (err) => {
    if(err){
        console.log("Server is not connected")
        return
    }
    dbconnect()
    console.log("Server is connected", process.env.PORT)
})