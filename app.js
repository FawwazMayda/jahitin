const express = require('express')
const app =express()
const cors = require('cors')
const orderController= require('./orderController')
const productController = require('./productController')
const customerController = require('./customerController')
const tailorController = require('./tailorController')
const trainerController = require('./trainerController')
const trainingController = require('./trainingController')

app.use(cors())
app.use('/api/orderController',orderController)
app.use('/api/productController',productController)
app.use('/api/customerController',customerController)
app.use('/api/tailorController',tailorController)
app.use('/api/trainingController',trainingController)
app.use('/api/trainerController',trainrController)

module.exports = app