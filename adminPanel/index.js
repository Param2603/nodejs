const express = require("express")
const PORT = 8080
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.use("/assets", express.static(path.join(__dirname, "/assets")))

app.get("/", (req,res) => {
    res.render("dashboard")
 })

 app.get("/", (req,res) => {
    res.render("/login")
 })

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running")
    return;
  }
  console.log("server is running ", PORT)
})