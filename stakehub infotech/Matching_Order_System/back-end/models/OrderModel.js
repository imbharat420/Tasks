const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    buyerQty : {type : Number},
    buyerPrice : {type : Number},
    sellerQty : {type : Number},
    sellerPrice : {type : Number},
    completed : {type : Boolean}
},{timestamps:true})

const OrderModel = mongoose.model("Order", orderSchema)

module.exports = OrderModel