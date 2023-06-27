const express = require('express')
const router = express.Router();
const { getProducts, createProduct, getProductsByCategory } = require('../controller/productController')
const auth = require('../middleware/auth')

router.get('/get-users-product', auth, getProducts)
router.post('/create-product', auth, createProduct)
router.get('/get-product-by-category-id', auth, getProductsByCategory)



module.exports = router