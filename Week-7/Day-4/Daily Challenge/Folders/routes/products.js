
const {_getAllProducts,
        _insertProduct
    } = require('../controllers/products.js')

const express = require('express')

const router = express.Router()

router.get('/', _getAllProducts)
router.post('/', _insertProduct)

module.exports = router
