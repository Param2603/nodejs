const express = require("express");
const app = express();
const path = require("path")

const PORT = 8080

app.set("view engine", "ejs")
app.use("./assets", express.static(path.join(__dirname, "/assets")))

app.get("/", (req,res) => {
    res.render("dashboard")
})

app.listen(PORT, (err) => {
    if(err){
        console.log("server is not running")
        return
    }
    console.log("server is running", PORT)
})