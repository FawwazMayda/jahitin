const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const product = require('./Schemas/productSchema')
const Increment = require('./Schemas/autoIncrement')
let autoInc = new Increment()
router.get('/product',(req,res)=>{
    product.find({},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send({msg:"OK",data:d})
    })
})

router.get('/product/:tailor_id',(req,res)=>{
    let tailorId= req.params.tailor_id
    product.find({tailor_id:tailorId},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send({msg:"OK",data:d})
    })
})

router.post('/product',(req,res)=>{
    console.log("/product POST")
    console.log(req.body)
    let id = autoInc.getNextId("product")
    let tailorId = parseInt(req.body.tailor_id)
    let jenis = req.body.jenis
    let kain = req.body.kain
    let ukuran = req.body.ukuran
    let harga = req.body.hargaSatuan
    let warna = req.body.warna
    product.create({
             _id:id,
             tailor_id : tailorId,
             jenis:jenis,
             kain : kain,
             ukuran : ukuran,
             warna : warna,
             hargaSatuan : harga
         },(err)=>{
             if(err) res.status(500).send("Internal Server Error")
             res.status(200).send(`Product Inserted with id ${id}`)
         })
})


module.exports = router