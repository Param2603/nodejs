const express = require("express")
const app = express()

const PORT = 8080



app.listen(PORT,(err) => {
    if(err){
        console.log("server is not running")
        return
    }
    console.log("server is running",PORT)
})