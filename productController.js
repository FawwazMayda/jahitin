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
    let sablon = req.body.sablon
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
             sablon : sablon,
             hargaSatuan : harga
         },(err)=>{
             if(err) res.status(500).send("Internal Server Error")
             res.status(200).send(`Product Inserted with id ${id}`)
         })
})

router.post('/product/edit/:product_id',(req,res)=>{
    let productId = req.params.product_id
    let jenis = req.body.jenis
    let kain = req.body.kain
    let ukuran = req.body.ukuran
    let harga = req.body.hargaSatuan
    let warna = req.body.warna
    let sablon = req.body.sablon
    product.findOne({_id:productId},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        if(d==null) res.status(404).send("Not Found")
        d.jenis = jenis
        d.kain = kain
        d.sablon = sablon
        d.ukuran = ukuran
        d.warna = warna
        d.hargaSatuan = harga
        d.save()
        res.status(200).send(`Product id ${productId} is updated`)
    })

})


module.exports = router