const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) 
// initialises body-parse so that we can parse objects
// for example with post or get requests

app.use(express.static('public')); 
// sets the directory of where all folders are kept

app.get('/images') //creates a page for the image folder
app.get('/form') // creartes a page for the form folder

app.get('/aboutMe/:hobby', (req,res) => {
    const data = req.params.hobby
    // req.params is how we get things from the browser
    const dataTest = Number(data)
    console.log(dataTest)
    if (String(dataTest) === String("NaN")){
        res.status(404)
        res.send("error")
    } else {
        res.send(data)
    }
})

app.post('/formdata', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
// this says you can post items to the /FormData 
// and this will be shown on the page

app.listen(8000, () => "port 8000")
// says that everything will stored on localhost 8000