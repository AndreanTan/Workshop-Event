const express = require("express");
const Router = express.Router();

const { cartController } = require("../controllers");

Router.post("/carts", cartController.getListItem);
Router.post("/cart", cartController.insertItem);
Router.delete("/cart", cartController.deleteItem);
Router.put("/cart", cartController.updateQtyItem);

module.exports = Router;

