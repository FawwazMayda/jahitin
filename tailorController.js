const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const tailor = require('./Schemas/tailorSchema')
const Increment = require('./Schemas/autoIncrement')
let autoInc = new Increment()

router.post('/tailor/signup',(req,res)=>{
    console.log("MASUK")
    let id = autoInc.getNextId("tailor")
    let username = req.body.username
    let pwd = req.body.pwd
    let namatoko = req.body.namatoko
    let jenisKelamin = req.body.jenisKelamin
    let alamat = req.body.alamat
    let nohp = req.body.nohp
    let jenisToko = req.body.jenisToko
    let kodePos = req.body.kodePos
    tailor.create({
        _id:id, username:username, pwd:pwd,namatoko:namatoko,
        jenisKelamin:jenisKelamin,alamat:alamat,kodePos:kodePos,
        jenisToko:jenisToko,nohp:nohp
    },(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send(`Created tailor with id ${id}`)
    })
})

router.post('/tailor/login',(req,res)=> {
    let username = req.body.username
    let pwd = req.body.pwd
    tailor.find({username:username,pwd:pwd},(err,d)=>{
        if(err) res.status(200).send("FAILED")
        res.status(200).send("OK")
    })
})

module.exports = router