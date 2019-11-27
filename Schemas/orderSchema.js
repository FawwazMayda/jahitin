const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});


let orderSchema = new mongoose.Schema({
    _id : Number,
    customer_id : Number,
    tailor_id : Number,
    product_id : Number,
    tanggalMulai : Date,
    tanggalSelesai : Date,
    biaya : Number,
    status : String
})



let order = mongoose.model('order',orderSchema,'order')
console.log("order Terbuat")
// order.create({
//     _id : 2,
//     customer_id:2,
//     tailor_id:3,
//     product_id:4,
//     tanggalMulai:"2019/11/25",
//     tanngalSelesai:"2019/11/27",
//     biaya:25000,
//     status:"Pesanan Diantar"
// })
module.exports = order
