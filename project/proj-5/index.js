const express = require("express")
const { connectDB } = require("./config/db")
const app = express()
const fs = require("fs")
const path = require("path")
const { movieRouter } = require("./routes/movieroute")
const PORT = 8080


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.use("/uploads" , express.static(path.join(__dirname , "/uploads")))
app.use("/", movieRouter)


app.listen(PORT, (err) => {
    if(err){
        console.log("Server is not connected")
        return
    }
    connectDB()
    console.log("Server is connected", PORT)
})