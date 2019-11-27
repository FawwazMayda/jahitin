const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const order = require('./Schemas/orderSchema')
const autoInc = require('./Schemas/nextSequence')
router.use(bodyParser.json())
router.post("/order",(req,res)=> {
    // REquest On Body
    // POST order from Customer
    console.log("MASUK /order")
    console.log(req.body)
    let tailorId = req.body.tailorId
    let customerId = req.body.customerId
    let productId = req.body.productId
    
     order.create({
     _id : 2,
     customer_id:customerId,
     tailor_id:tailorId,
     product_id:productId,
     tanggalMulai : "1970/12/12",
     tanggalSelesai : "1970/12/12",
     biaya : 0,
     status : "Pesanan Masuk"
    },(err)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send("Order Inserted from Customer")
    })
})

router.post("/order/:order_id",(req,res)=> {
    // endpoint for Tailor
    console.log("MASUK /order/:order_id")
    console.log(req.params)
    console.log(req.body)
    let orderId = parseInt(req.params.order_id)
    let tanggalMulai = req.body.tanggalMulai
    let tanggalSelesai = req.body.tanggalSelesai
    const filter = {_id : orderId}
    const update = {tanggalMulai : tanggalMulai, tanggalSelesai : tanggalSelesai,status:"Diterima Penjahit"}
    order.findOne({_id:orderId},(err,doc)=>{
        if(err) res.status(500).send("Internal Server Error")
        doc.tanggalMulai = tanggalMulai
        doc.tanggalSelesai = tanggalSelesai
        doc.status = "Diterima Penjahit"
        doc.save()

        res.status(200).send("Order Inserted from Tailor")
    })
})

module.exports = router