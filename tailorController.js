const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser)
const tailor = require('./Schemas/tailorSchema')

router.post('/tailor/signup',(req,res)=>{
    let id = req.body.id
    let username = req.body.username
    let pwd = req.body.pwd
    let namatoko = req.body.namatoko
    let alamat = req.body.alamat
    let nohp = req.body.nohp
    let ktp  = req.body.KTP


    tailor.create({
             _id:id,
             username:username,
             pwd:pwd,
             namatoko : namatoko,
             alamat : alamat,
             nohp : nohp,
             KTP : ktp
         },(err,d)=>{
             if(err) res.status(500).send("Internal Server Error")
             res.status(200).send("Tailor created")
         })
})

module.exports = router