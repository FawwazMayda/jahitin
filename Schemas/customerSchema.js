const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});


let customerSchema = new mongoose.Schema({
    _id : Number,
    username : String,
    pwd : String,
    nohp : String
})

let customer = mongoose.model('customer',customerSchema,'customer')
// console.log("customer Terbuat")
// customer.create({
//   _id:2,
//   username:"ABANG BLOL",
//   pwd:"ABABBA",
//   nohp:"0852"
// })
module.exports = mongoose.model('customer')
