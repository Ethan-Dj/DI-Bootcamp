
const {getAllProducts, insertProduct} = require('../modules/products.js')

const _getAllProducts = (req,res) => {
    getAllProducts() //now a promise
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

const _insertProduct = (req,res) => {
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}
module.exports = {
    _getAllProducts,
    _insertProduct
}
