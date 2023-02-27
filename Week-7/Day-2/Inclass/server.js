const express = require("express")
const cors = require('cors')
const{products} = require("./database/products.js")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(5009, () => {
    console.log("run on port 5009") // app exectures when local host 5000 is run
})

app.use("/",express.static(__dirname + "public"))
// says when at local host we set at / this route:
// go to directory name, where current js file is, and go to the public file 
// to get the front end and display it

console.log("working")

app.get('/ethan/dj',(req,res)=>{ // can name this as I please for where the website goes
    res.json(products) // which json file do I want to display on the page
})

app.get('/ethan/dj/:id',(req,res)=>{ 
    const product_id = req.params.id
    const product = products.find(item => {
        return item.id == product_id
    })
    res.json(product)
})


app.get('/search',(req,res) => {
    const name = req.query.q
    const end = products.filter(item => {
        return item.name.toLowerCase().includes(req.query.q)
    })
    res.json(end)
})

app.post("/product", (req,res)=>{
    const newProduct = {
        id: products.length+1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    console.log(products)
    res.status(200).json(products)
    //careful, only eed res once!!
})
