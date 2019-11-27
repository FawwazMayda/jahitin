const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const trainer = require('./Schemas/trainerSchema')
const Increment = require('./Schemas/autoIncrement')
let autoInc = new Increment()

router.post('/trainer/signup',(req,res)=>{
    let id = autoInc.getNextId("trainer")
    let username = req.body.username
    let pwd = req.body.pwd
    let namalembaga = req.body.namalembaga
    let alamat = req.body.alamat
    let nohp = req.body.nohp
    let ktp  = req.body.KTP


    trainer.create({
             _id:id,
             username:username,
             pwd:pwd,
             namaLembaga : namalembaga,
             alamat : alamat,
             nohp : nohp,
             KTP : ktp
         },(err,d)=>{
             if(err) res.status(500).send("Internal Server Error")
             res.status(200).send(`Trainer created with id ${id}`)
         })
})


router.post('/trainer/login',(req,res)=>{
    let username = req.body.username
    let pwd = req.body.pwd

    trainer.findOne({
             username:username,
             pwd:pwd,
        },(err,d)=>{
             if(err) res.status(200).send("FAILED")
             res.status(200).send("OK")
         })
})

router.post('/trainer/createTraining',(req,res)=>{
   
})

module.exports = router