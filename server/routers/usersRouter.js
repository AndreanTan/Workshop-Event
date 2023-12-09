const express = require("express");
const Router = express.Router();

const { usersController } = require("../controllers");

Router.post("/userRegist", usersController.createUser);
Router.post("/userLogin", usersController.login);
module.exports = Router;
