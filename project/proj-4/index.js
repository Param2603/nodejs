const express = require("express")
const { dbconnect } = require("./config/db")
const { router } = require("./routes/router")
const app = express()
const PORT = 8080

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/", router)

app.listen(PORT, (err) => {
    if(err){
        console.log("server is not connected")
        return
    }
    dbconnect()
    console.log("server is connected", PORT)
})