"use strict";
const { Model } = require("sequelize");
const enumValues = ["waiting", "payment", "failed"];
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, order_detail, payment }) {
      this.belongsTo(user, { foreignKey: "user_id" });
      this.hasMany(order_detail, { foreignKey: "order_id" });
      this.hasMany(payment, { foreignKey: "order_id" });
    }
  }
  order.init(
    {
      total_price: DataTypes.INTEGER,
      status: { type: DataTypes.ENUM, values: enumValues },
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
      modelName: "order",
    }
  );
  return order;
};
