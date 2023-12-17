const express = require("express");
const Router = express.Router();
const { workshopController } = require("../controllers/");

Router.get("/getWorkshop", workshopController.getAllWorkshop);
Router.get("/getCategory", workshopController.getAllCategory);
Router.get("/getWorkshopById", workshopController.getWorkshopById);
Router.get("/getNewWorkshop", workshopController.getNewestWorkshop);
module.exports = Router;
