const express = require("express")
const router = express.Router();
const auth = require("./../middleware/auth");
const payment = require("./../controller/paymentController")


router.post("/payment/create",auth ,payment.createPayment);

module.exports = router;