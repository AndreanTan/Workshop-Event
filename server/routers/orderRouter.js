const express = require("express");
const Router = express.Router();

const { orderController } = require("../controllers");

Router.post("/order", orderController.createOrder);

module.exports = Router;
