const express = require("express");
const Router = express.Router();

const { usersController } = require("../controllers");

Router.get("/regist", usersController.createUser);

module.exports = Router;
