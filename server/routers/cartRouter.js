const express = require("express");
const Router = express.Router();

const { cartController } = require("../controllers");

Router.post("/carts", cartController.getListItem);
Router.post("/cart", cartController.insertItem);
Router.delete("/cart", cartController.deleteItem);

module.exports = Router;

