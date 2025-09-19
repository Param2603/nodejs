const express = require("express")
const app = express()

const PORT = 8080

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

let array = []

app.get("/", (req, res) => {
    return res.render("home", { array });
});

app.post("/addData", (res,req)=>{
    console.log(res.body)
    array.push(res.body)
//    return res.redirect("/")
})

// app.get("/delete/:id", (res,req) => {
//     array.filter((element,index) => a)
// })

// app.get("/update/:id", (res,req) => {

// })

app.listen(PORT,(err) => {
    if(err){
        console.log("server is not running",PORT)
        return
    }
    console.log("server is running",PORT)
})