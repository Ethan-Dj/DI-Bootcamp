const {largeNumber, dateNow} = require('./main.js')
const http = require('http')

const b = 5

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    // says what kind of data we get the server response gives 
    res.writeHead(200)
    // response error code 
    res.end(`<h1>Response from server </h1>
    <p>The number is ${largeNumber + b}</p>
    <p>The date is ${dateNow() + b}</p>
    `)
    // Thhis is what we get as a response from the server as a final response
    // ie. the end of the response

})

function listening(){
    console.log("I am listening")
}

server.listen(8080,"localhost", listening)
// listeing for requests from this server at port 8080,
//  when we have a request, we execute the listening function

// the server.listen is the same server as on line 6
// the listening function is exectued when the server starts listening for requests
// this is when this file is executed


