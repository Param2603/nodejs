const express = require("express")
const { router } = require("./routes/route")
const app = express()

const PORT = 8080

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use("/", router)


app.listen(PORT, (err) => {
    if(err){
        console.log("server is not running", PORT)
        return
    }
    console.log("server is running", PORT)
})