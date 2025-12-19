const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const { dbconnect } = require("./config/db")

const app = express()
dotenv.config()
 
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



app.listen(process.env.PORT, (err) => {
    if(err){
        console.log("Server is not connected")
        return
    }
    dbconnect()
    console.log("Server is connected", process.env.PORT)
})