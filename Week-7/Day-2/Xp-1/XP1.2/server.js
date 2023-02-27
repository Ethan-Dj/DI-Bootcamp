const http = require("http")

const user = {
    firstname: "john",
    lastname: "Doe"
}

const server = http.createServer((req,res)=>{
    res.end(JSON.stringify(user))
})

server.listen(8080,"localhost")

console.log("yes")