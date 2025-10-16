const express = require("express")
const { connectDB } = require("./config/db")
const app = express()
const fs = require("fs")
const path = require("path")
const PORT = 8080


app.use("view engine", "ejs")
app.use(express.urlencoded({extended:true}))


app.listen(PORT, (err) => {
    if(err){
        console.log("Server is not connected")
        return
    }
    connectDB()
    console.log("Server is connected", PORT)
})

