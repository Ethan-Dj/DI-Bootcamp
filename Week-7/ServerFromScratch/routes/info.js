const {_getAllEntered, _inputValue} = require("./routes/info")

const express = require('express') //use express npm

const router = express.Router() // need to set the router instance of the express npm 

// the aobe lines are adding routes to the router variable, thus they are not sent all together 

router.get("/", _getAllEntered)

router.post("/", _inputValue)

// options include get post update delete, we can desing these actions how we want

module.exports = router

