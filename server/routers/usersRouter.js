const express = require("express");
const Router = express.Router();

const { usersController } = require("../controllers");
const { verify } = require("../lib/jwt");

Router.post("/userRegist", usersController.createUser);
Router.post("/userLogin", usersController.login);
Router.post("/userVerify", verify, usersController.verifyUser);
Router.get("/verifyAccess", verify, usersController.verifyAccess);
module.exports = Router;
