const db = require("../models");
const { cartRepository } = require("../repositories");

function getTotal(listItem) {
  let result = 0;
  listItem.map((item) => {
    result += item.subTotal;
  });
  return result;
}

function setOrderDetail(listItem, orderId) {
  try {
    listItem.map((item) => {
      db.order_detail
        .build({
          quantity: item.quantity,
          sub_total: item.subTotal,
          workshop_id: item.id,
          order_id: orderId,
        })
        .save();
    });
  } catch (error) {
    res.status(500).send({
      isError: true,
      message: error,
    });
  }
}

module.exports = {
  createOrder: async (req, res, next) => {
    try {
      const { userId } = req.body;
      const listItem = await cartRepository.getListItemByIdUser(
        req.body.userId
      );
      const total = getTotal(listItem);
      const newOrder = db.order
        .build({ total_price: total, status: "waiting", user_id: userId })
        .save();
      const orderData = await newOrder;
      const orderId = JSON.stringify(JSON.parse(orderData.id));
      const orderDetail = setOrderDetail(
        listItem,
        orderId,
      );
      res.status(201).send({
        isError: false,
        message: "order succes",
        data: orderDetail,
      });
    } catch (error) {
      next(error);
    }
  },
};
