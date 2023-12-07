const express = require("express");
const Router = express.Router();

const { cartController } = require("../controllers");

Router.get("/cart/list", cartController.getListItem);

module.exports = Router;

