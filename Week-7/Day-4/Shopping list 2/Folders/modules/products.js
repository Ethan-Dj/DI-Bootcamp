const db = require('../config/db.js')


const getAllProducts = () => {
    return db('items')
    .select('id','item','amount')
    .orderBy('amount')
}

const insertProduct = (product) => {
    return db('items')
    .insert(product)
    .returning('*')
}

module.exports = {
    getAllProducts,
    insertProduct

}