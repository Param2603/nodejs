const express = require("express")
const app = express()

const PORT = 8080

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

let array = []
app.get("/",(res,req) => {
    return res.render("home", { array });
})

app.listen(PORT,(err) => {
    if(err){
        console.log("server is not running")
        return
    }
    console.log("server is running",PORT)
})