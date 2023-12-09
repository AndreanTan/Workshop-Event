"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ order, mst_payment_method }) {
      this.belongsTo(order, { foreignKey: "order_id" });
      this.belongsTo(mst_payment_method, {
        foreignKey: "mst_payment_method_id",
      });
    }
  }
  payment.init(
    {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
