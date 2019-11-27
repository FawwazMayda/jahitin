const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://m001-student:abangbola@sandbox-wtclz.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, dbName:"jahit"})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Sambung")
});

let sequenceSchema = new mongoose.Schema({
    customer : Number,
    tailor : Number,
    product : Number,
    trainer : Number,
    training : Number,
    order : Number
})

let sequence = mongoose.model('sequence',sequenceSchema,'sequence')

// sequence.create({
//     customer : 0,
//     tailor : 0,
//     product : 0,
//     trainer : 0,
//     training : 0,
//     order : 0
// })
module.exports = sequence