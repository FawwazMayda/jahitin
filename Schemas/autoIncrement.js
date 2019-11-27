const order = require('./orderSchema')
const product = require('./productSchema')
const customer = require('./customerSchema')
const tailor = require('./tailorSchema')
const trainer = require('./trainerSchema')
const training = require('./trainingSchema')

class Increment {
    getNextId(collect){
        switch(collect){
            case "order":
                this.orderId+=1
                return this.orderId
            case "product":
                this.productId+=1
                return this.productId
            case "customer":
                this.customerId +=1
                return this.customerId
            case "tailor":
                this.tailorId+=1
                return this.tailorId
            case "trainer":
                this.trainerId+=1
                return this.trainerId
            case "training":
                this.trainingId+=1
                return this.trainingId
        }
    }

    constructor(){
        order.find({},(err,d)=> this.orderId = this.maxId(d))
        product.find({},(err,d)=> this.productId = this.maxId(d))
        customer.find({},(err,d)=> this.customerId = this.maxId(d))
        tailor.find({},(err,d)=> this.tailorId = this.maxId(d))
        trainer.find({},(err,d)=> this.trainerId = this.maxId(d))
        training.find({},(err,d)=> {
            this.trainingId = this.maxId(d)
            console.log("Selesai Hitung")
        })
    }
    maxId(d){
        let max = 0
        d.forEach(element => {
           if (element._id > max){
               max = element._id
           } 
        })
        return max
    }
}

//const i = new Increment()
//console.log(i.getCurrentId())

module.exports = Increment