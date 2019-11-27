const express = require('express')
const router = express.Router()
const order = require('./Schemas/orderSchema')

router.post("/order",(req,res)=> {
    // REquest On Body
    // POST order from Customer
    let tailorId = req.body.tailorId
    let customerId = req.body.customerId
    let productId = req.body.productId
    
     order.create({
     _id : ,
     customer_id:customerId,
     tailor_id:tailorId,
     product_id:productId,
    },(err)=>{
        if(err) res.status(50).send("Internal Server Error")
        res.status(200).send("Order Inserted from Customer")
    })
})

router.post("/order/:order_id",(req,res)=> {
    // endpoint for Tailor
    let orderId = req.params.order_id
    let tanggalMulai = req.body.tanggalMulai
    let tanggalSelesai = req.body.tanggalSelesai
    order.create({},(err)=> {
        if(err)  res.status(501).send("Internal server Error")
        res.status(200).send("Order Inserted from Tailor")
    })


})

module.exports = router