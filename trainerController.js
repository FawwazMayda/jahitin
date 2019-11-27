const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const trainer = require('./Schemas/trainerSchema')
const training = require('./Schemas/trainingSchema')
const Increment = require('./Schemas/autoIncrement')
let autoInc = new Increment()

router.post('/trainer/signup',(req,res)=>{
    let id = autoInc.getNextId("trainer")
    let pemilikLembaga = req.body.pemilikLembaga
    let nohp = req.body.nohp
    let jenisKelamin = req.body.jenisKelamin
    let namaLembaga = req.body.namaLembaga
    let alamat = req.body.alamat
    let kodePos = req.body.kodePos
    let jenisPelatihan = req.body.jenisPelatihan    
    trainer.create({
        _id:id,pemilikLembaga:pemilikLembaga,nohp:nohp,
        jenisKelamin:jenisKelamin,namaLembaga:namaLembaga,
        alamat:alamat,kodePos:kodePos,jenisPelatihan:jenisPelatihan
    },(err,d)=>{
        if(err) res.status(500).send("Internal Server Error")
        res.status(200).send(`Trainer created with id ${id}`)
    })
})


router.post('/trainer/login',(req,res)=>{
    let namaLembaga = req.body.namaLembaga
    let pwd = req.body.pwd

    trainer.findOne({
             namaLembaga:namaLembaga,
             pwd:pwd,
        },(err,d)=>{
             if(err) res.status(200).send("FAILED")
             res.status(200).send("OK")
         })
})

router.post('/trainer/createTraining',(req,res)=>{
   console.log(req.body)
   let id = autoInc.getNextId("training")
   let trainerId = req.body.trainerId
   let tanggalMulai = req.body.tanggalMulai
   let tanggalSelesai = req.body.tanggalSelesai
   let alamat = req.body.alamat
   let kuota = req.body.kuota
   let jenisTraining = req.body.jenisTraining
   training.create({_id : id, trainer_id : trainerId,
    tanggalMulai : tanggalMulai, tanggalSelesai: tanggalSelesai, kuota: kuota,alamat:alamat,jenisTraining:jenisTraining },(err,d)=>{
       if(err) res.status(500).send("Internal Server Error")
       res.status(200).send(`training created with id ${id} by trainer ${trainerId}`)
   })

})

module.exports = router