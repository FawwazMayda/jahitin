const express = require('express')
const app =express()
const cors = require('cors')
const orderController= require('./orderController')

app.use(cors())
app.use('/api/orderController',orderController)

module.exports = app