const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});

let productSchema = new mongoose.Schema({
    _id:Number,
    tailor_id : Number,
    jenis : String,
    kain : String,
    sablon : String,
    ukuran : String,
    warna : String,
    hargaSatuan : Number
})

let product = mongoose.model('product',productSchema,'product')
console.log("product terbuat")
// product.create({
//     _id:4,
//     tailor_id : 3,
//     jenis:"Sablon",
//     kain : "Satin",
//     ukuran : "M",
//     warna : "Biru",
//     hargaSatuan : 15000
// })
module.exports = product

