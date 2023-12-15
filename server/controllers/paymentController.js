const db = require("../models");
const respHandler = require("../utils/respHandler");

module.exports = {
  createPayment: async (req, res, next) => {
    try {
      const { paymentMethod, orderId } = req.body;
      const newPayment = await db.payment
        .build({
          mst_payment_method_id: paymentMethod,
          order_id: orderId,
          status_payment: "WAITING PAYMENT",
        })
        .save();
      respHandler(res, "Payment success", newPayment, false);
    } catch (error) {
      console.log("Error : ", error);
    }
  },
};
