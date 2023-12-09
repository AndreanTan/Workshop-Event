const express = require("express");
const Router = express.Router();

const { cartController } = require("../controllers");

Router.post("/cart/list", cartController.getListItem);
Router.post("/cart/insert", cartController.insertItem);

module.exports = Router;

