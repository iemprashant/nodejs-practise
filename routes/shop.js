const path = require('path')
const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/', shopController.getIndex)
router.get('/products', shopController.getProductsItems)
router.get('/products/:productId', shopController.getProductitem)
router.get('/cart', shopController.getCartItem)
router.post('/cart', shopController.postCart)
router.post('/cart-delete-item', shopController.postCartDelete)
router.get('/orders', shopController.getOrders)
router.post('/create-order', shopController.postOrder)
router.get('/checkout', shopController.getCheckout)
module.exports = router
