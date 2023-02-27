const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("<h1>This is an html tag</h1>")
})

app.listen(3001)

console.log("working")