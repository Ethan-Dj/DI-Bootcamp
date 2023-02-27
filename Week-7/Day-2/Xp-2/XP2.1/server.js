const express = require('express')
const app = express()

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

console.log(user)

app.get('/api', function (req, res) {
  res.json(user)
})

app.listen(3003)

app.use(express.static('public'));

