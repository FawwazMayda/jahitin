const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});

let trainingSchema = new mongoose.Schema({
    _id : Number,
    trainer_id : Number,
    tanggalMulai : Date,
    tanggalSelesai : Date,
    alamat : String,
    kuota : Number,
    jenisTraining : String,
    pesertaCustomer : [Number],
    pesertaTailor : [Number]
})

let training = mongoose.model('training',trainingSchema,'training')
console.log("training terbuat")
// training.create({
//     _id : 1,
//     trainer_id:1,
//     tanggalMulai:"2019/12/22",
//     tanggalSelesai:"2019/12/28",
//     alamat : "Jl.Panjat Beringin",
//     kuota : 300,
//     jenisTraining : "Jahit Kilaat",
//     pesertaCustomer : [2,4,45,46,45,7,6],
//     pesertaTailor : [74,5,4,34,43]
})

module.exports = training