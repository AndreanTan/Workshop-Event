const db = require("../models");
const { cartRepository } = require("../repositories");

module.exports = {
  getListItem: async (req, res, next) => {
    try {
      const userId = req.body.userId;
      const getItem = await cartRepository.getListItemByIdUser(userId);
      res.status(200).send({
        isError: false,
        message: "get Data user success!",
        data: getItem,
      });
    } catch (error) {
      next(error);
    }
  },

  insertItem: async (req, res, next) => {
    try {
      const newItem = db.cart.build({ ...req.body }).save();
      res.status(201).send({
        isError: false,
        message: "item success added!",
        data: newItem,
      });
    } catch (error) {
      next(error);
    }
  },
};
