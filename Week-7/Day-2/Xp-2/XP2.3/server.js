const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
})

app.listen(5005)

console.log("working")






