const http = require('http')
const server = http.createServer((req,res) => {
    res.write("hello world")
    return res.end()
    
})

server.listen(8080,(error) => {
    if(error){
        console.log("server is not running")
    }
    console.log("server is running")
})