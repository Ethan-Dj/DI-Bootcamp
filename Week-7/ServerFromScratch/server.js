const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// don't need to worry about the above code, it is part of the examples on 
// the body-parser npm page

// whenever using any module we need to remember to 
// create an instance of it or configure it 
// otherwise we will get an error

dotenv.config()

const app = express()
// creates instance of express, essentially server, 
// and allows us to handle request and serve static files

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
})

app.use("/",express.static(__dirname + "/public"))

const allRouter = require("./routes/info") //gets routers file
app.use("/api", allRouter) // says that all routes comes after here