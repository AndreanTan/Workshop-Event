const db = require("../models");
const { cartRepository } = require("../repositories");

function getTotal(listItem) {
  let result = 0;
  listItem.map((item) => {
    result += item.subTotal;
  });
  return result;
}

module.exports = {
  createOrder: async (req, res, next) => {
    try {
      const listItem = await cartRepository.getListItemByIdUser(
        req.body.userId
      );
      const total = getTotal(listItem);
      const newOrder = db.order
        .build({ total_price: total, status: "waiting", user_id: req.body.userId })
        .save();
      res.status(201).send({
        isError: false,
        message: "order succes",
        data: newOrder,
      });
    } catch (error) {
      next(error);
    }
  },
};
