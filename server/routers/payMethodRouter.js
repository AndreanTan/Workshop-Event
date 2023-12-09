const express = require("express");
const Router = express.Router();

const { paymentMethodController } = require("../controllers");

Router.post("/payment/method", paymentMethodController.insertPayMethod);

module.exports = Router;
