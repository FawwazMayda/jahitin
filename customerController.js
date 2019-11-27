const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const customer = require('./Schemas/customerSchema')

router.post('/customer/signup',(req,res)=>{
    let id = req.body.id
    let username = req.body.username
    let pwd = req.body.pwd
    let nohp = req.body.nohp
    customer.create({ _id:2, username:username, pwd:pwd, nohp:nohp},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send("User created")
    })
})

module.exports = router