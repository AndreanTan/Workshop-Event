const db = require("../models");
const respHandler = require("../utils/respHandler");

module.exports = {
  insertPayMethod: async (req, res, next) => {
    try {
      const newPayMethod = await db.mst_payment_method
        .build({ ...req.body })
        .save();
      respHandler(res, "Payment method success added", newPayMethod, false);
    } catch (error) {
      console.log("Error ", error);
    }
  },
};
