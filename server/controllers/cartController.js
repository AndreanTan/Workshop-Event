const db = require("../models");
const { cartRepository } = require("../repositories");
const respHandler = require("../utils/respHandler");

setTotal = (items) => {
  let result = 0;
  items.map((item) => {
    result += item.subTotal;
  });
  return result;
};

module.exports = {
  getListItem: async (req, res, next) => {
    try {
      const userId = req.body.userId;
      const getItem = await cartRepository.getListItemByIdUser(userId);
      const total = setTotal(getItem);
      res.status(200).send({
        isError: false,
        message: "get data success !",
        data: { items: getItem, total },
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

  deleteItem: async (req, res, next) => {
    try {
      const item = await db.cart.findByPk(req.body.cartId);
      if (!item) {
        respHandler(
          res,
          `Cart with id ${req.body.cartId} not found`,
          null,
          404,
          true
        );
      } else {
        await db.cart.destroy({
          where: {
            id: req.body.cartId,
          },
        });
        respHandler(
          res,
          `Cart with id ${req.body.cartId} success deleted`,
          null,
          200,
          false
        );
      }
    } catch (error) {
      next(error);
    }
  },

  updateQtyItem: async (req, res, next) => {
    try {
      const { quantity, cartId } = req.body;
      const result = await cartRepository.updateQuantityCart(quantity, cartId);
      res.status(201).send({
        isError: false,
        message: "update data success !",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },
};
