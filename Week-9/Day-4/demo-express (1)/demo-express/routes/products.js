const express = require('express');
const {_getAllProducts,
      _getProductById,
      _insertProduct,
      _updateProduct,
      _deleteProduct,
      _searchProduct
      } = require('../controllers/products.js');

const router = express.Router();

router.get('/search', _searchProduct)
// to access this get /search/?name=anything
// search comes first 
// so it does not get confused with 
// get product by id

router.get('/', _getAllProducts);
router.get('/:id', _getProductById)

router.post('/', _insertProduct);
router.put('/:id', _updateProduct)
router.delete('/:id', _deleteProduct)



module.exports = router
