const db = require("../models");

module.exports = {
  getListItem: async (req, res, next) => {
    try {
        const getItem = await db.cart.findAll();
      res.status(200).send({
        isError: false,
        message: "get Data user success!",
        data: getItem,
      });
    } catch (error) {
      next(error);
    }
  },
};
