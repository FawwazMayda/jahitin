const express = require('express')
const app =express()
const cors = require('cors')
const orderController= require('./orderController')
const productController = require('./productController')
const customerController = require('./customerController')
const tailorController = require('./tailorController')

app.use(cors())
app.use('/api/orderController',orderController)
app.use('/api/productController',productController)
app.use('/api/customerController',customerController)
app.use('/api/tailorController',tailorController)

module.exports = app