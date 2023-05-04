const OrderModel = require("../models/OrderModel")

const getOrder = async (req,res)=>{
    try{
        const pending = await OrderModel.find({completed : false})
        const complete = await OrderModel.find({completed : true})
        res.json({pending,complete})
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Message":"Internal Server Error"})
    }
}

const postOrder = async (req,res)=>{
    const {buyerQty,buyerPrice,sellerQty,sellerPrice} = req.body
    const order = new OrderModel({
        buyerQty,
        buyerPrice,
        sellerQty,
        sellerPrice,
        completed:false
    })
    try{
        await order.save()
        res.json(order)
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Message":"Internal Server Error"})
    }
}

const deleteOrder = async (req,res)=>{
    const {id} = req.params
    try{
        const order = await OrderModel.findById(id)
        order.completed = true
        await order.save()
        res.json(order)
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Message":"Internal Server Error"})

    }
}

module.exports = {getOrder,postOrder,deleteOrder}