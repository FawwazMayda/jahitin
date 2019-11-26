const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});


let tailorSchema = new mongoose.Schema({
    _id : Number,
    username : String,
    pwd : String,
    namatoko : String,
    alamat : String,
    nohp : String,
    KTP : String
})

let tailor = mongoose.model('tailor',tailorSchema,'tailor')
console.log("tailor Terbuat")
tailor.create({
    _id:3,
    username:"ABANG HOLA",
    pwd:"BBBB",
    namatoko : "Toko Bola",
    alamat : "Jl.Kaliurang",
    nohp : "0852",
    KTP : "637"
})
module.exports = mongoose.model('tailor')
