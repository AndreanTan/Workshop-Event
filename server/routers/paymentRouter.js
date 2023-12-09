const express = require("express");
const Router = express.Router();

const paymentController = require("../controllers/paymentController");

Router.post("/payment", paymentController.createPayment);

module.exports = Router;
