const express = require("express")
const { dbconnect } = require("./config/db")
const app = express()
const PORT = 8080

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async(res,req) => {
    try {

    } 
    catch (err) {
        console.log(err)
        res.render("")
    }

})

app.listen(PORT, (err) => {
    if(err){
        console.log("server is not running", PORT)
        return
    }
    dbconnect()
    console.log("Server is running", PORT)
})