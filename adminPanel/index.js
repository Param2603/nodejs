const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")
const { connectDB } = require("./config/db")
const { dashboardRouter } = require("./routes/dashboardroutes")

app.set("view engine", "ejs")
app.use("/assets", express.static(path.join(__dirname, "/assets")))
app.use(express.urlencoded({extended:true}))
app.use("/", dashboardRouter)

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running")
    return;
  }
  connectDB()
  console.log("server is running ", PORT)
})
