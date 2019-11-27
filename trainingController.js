const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const training = require('./Schemas/trainingSchema')
const trainer = require('./Schemas/trainerSchema')

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

router.post("/joinTraining",(req,res)=>{
    let nama = req.body.nama
    let nohp = req.body.nohp
    let jenisKelamin = req.body.jenisKelamin
    let trainerId = req.body.trainerId

    trainer.findOne({_id:trainerId},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        if(d==null) res.status(404).send("Not Found")
        let data = {nama:nama, nohp:nohp, jenisKelamin:jenisKelamin}
        var nData = (d.peserta) 
        console.log(nData)
        nData.push(data)
        d.peserta = nData
        d.save()
        res.status(200).send(`Terdaftar pada lembaga ${trainerId}`)
    })


})

router.get("/daftarPeserta/:trainer_id",(req,res)=> {
    let trainer_id = req.params.trainer_id
    trainer.findOne({_id:trainer_id},(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        if(d==null) res.status(200).send("Tidak ada peserta")
        res.status(200).send({peserta:d.peserta})
    })
})

module.exports = router