const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});

let trainerSchema = new mongoose.Schema({
    _id : Number,
    pemilikLembaga : String,
    nohp : String,
    jenisKelamin : String,
    namaLembaga : String,
    alamat : String,
    kodePos : Number,
    jenisPelatihan : String,
    peserta : [Object]
})

let trainer = mongoose.model('trainer',trainerSchema,'trainer')
console.log("trainer terbuat")
// trainer.create({
//     _id:1,
//     username:"Bela Karya",
//     pwd : "CCC",
//     namaLembaga : "Bela Karya",
//     alamat : "Jl.Tegang Rasa",
//     nohp : "0853",
//     KTP : "672"
// })
module.exports = trainer