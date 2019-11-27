const sequence = require('./sequenceSchema')

 function getValueForNextSequence(seq){
    sequence.findOne({},(err,doc)=>{
        console.log(doc)
        let val = doc[seq]
        doc[seq] = val+1
        doc.save()
        return val+1
    })
}
async function jalan(){
    let c =  await (getValueForNextSequence("customer"))
    let o = await (getValueForNextSequence("order"))
    let p = await (getValueForNextSequence("product"))
    let tra = await (getValueForNextSequence("trainer"))
    let tre = await (getValueForNextSequence("training"))
    let t = await (getValueForNextSequence("tailor"))
}
//jalan()
module.exports = getValueForNextSequence