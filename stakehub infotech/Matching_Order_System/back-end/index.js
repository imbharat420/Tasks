const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const OrderRoutes = require("./routes/OrderRoutes")


const app = express()
app.use(cors())
PORT = process.env.PORT || 8000

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser : true}, {useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})

// Get Request 
app.get("/", async(req,res)=>{
    res.send("Welcome to Order Matching System")
})

// Middlewares
app.use(bodyParser.json())

// Routes
app.use("/orders", OrderRoutes)

// Start Server
app.listen(PORT ,()=>{
    console.log(`Listening on port ${PORT}`)
})