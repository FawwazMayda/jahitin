const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const training = require('./Schemas/trainingSchema')

router.post('/training/registerCustomer/:training_id/:customer_id',(req,res)=>{
    let training_id =  parseInt(req.params.training_id)
    let customer_id =  parseInt(req.params.customer_id)
    
    training.findOne({
             _id:training_id
         },(err,d)=>{
             if(err) res.status(500).send("Internal Server Error")
             if(d.kuota < 1){
                res.status(200).send("Kuota penuh")
             }else if(Date(d.tanggalMulai) > Date.now()){
                res.status(200).send("Pendaftaran telah ditutup")
             }else{
                var nData = d.pesertaCustomer;
                nData.push(customer_id);
                d.pesertaCustomer = nData;
                d.kuota = d.kuota - 1
                d.save()
                res.status(200).send(`Customer ${customer_id} terdaftar pada training ${training_id}`)
             }
         })
})

router.post('/training/registerTailor/:training_id/:tailor_id',(req,res)=>{
    let training_id =  parseInt(req.params.training_id)
    let tailor_id =  parseInt(req.params.tailor_id)
    
    training.findOne({
             _id:training_id
         },(err,d)=>{
             if(err) res.status(500).send("Internal Server Error")
             if(d.kuota < 1){
                res.status(200).send("Kuota penuh")
             }else if(Date(d.tanggalMulai) > Date.now()){
                res.status(200).send("Pendaftaran telah ditutup")
             }else{
                var nData = d.pesertaTailor;
                nData.push(tailor_id);
                d.pesertaTailor = nData;
                d.kuota = d.kuota-1
                d.save()
                res.status(200).send(`Tailor ${tailor_id} terdaftar pada training ${training_id}`)
             }
         })
})

router.get('/training',(req,res)=>{
    training.find({},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send({msg:"OK",data:d})
    })
})

module.exports = router