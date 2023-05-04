const express = require("express")
const router = express.Router()
const OrderController = require("../controllers/OrderController")

router.get("/", OrderController.getOrder)
router.post("/", OrderController.postOrder)
router.delete("/:id", OrderController.deleteOrder)


module.exports = router