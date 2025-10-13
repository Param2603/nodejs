const express = require("express")
const { connectDB } = require("./config/db")
const app = express()
require('dotenv').config()/

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(process.env.PORT, (err) => {
    if(err){
        console.log("server is not connected")
    }
    
    console.log("server is connected", process.env.PORT)
})