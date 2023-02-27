const express = require('express')
const app = express()

app.get('/:id', function (req, res) {
    const id = req.params
    console.log(id)
    res.send(id)
})

app.listen(3004)