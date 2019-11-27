const express = require('express')
const app =express()
const cors = require('cors')
const orderController= require('./orderController')
const productController = require('./productController')

app.use(cors())
app.use('/api/orderController',orderController)
app.use('/api/productController',productController)

module.exports = app