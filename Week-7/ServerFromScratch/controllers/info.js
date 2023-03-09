

// this folder is all about sending or recieving data from the server
// each function first sends a query to the server if they need to 
// then each promise is unwrapped and sent back to the client with res.json(data)


const {inputValue, getAllEntered} = require('../modules/info')

const _getAllEntered = (req, res) => {
    getAllEntered()
    .then(data => res.json(data))
    // the above code .json or .send send the data back to the client
    // on the route that was set for it 
}


// we have req and res as parameters as this is an http request handler
const _inputValue = (req,res) => {
    inputValue(req.body)
    // .then(data => res.json(data))// this sends inserted data back to the client, not neaded
}
// req.body contains the data sent by the client, we use the body-parse inorder to get 


// const _getProductById =(req,res) => {
//     getProductById(req.params.id)
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

// in the above code req.params send one value to the server as part of the url
// req.params.key is the data itself that is sent to the server as part of a request 

module.exports = {
    _inputValue,
    _getAllEntered
}