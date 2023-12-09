"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ order, workshop }) {
      this.belongsTo(order, { foreignKey: "order_id" });
      this.belongsTo(workshop, { foreignKey: "workshop_id" });
    }
  }
  order_detail.init(
    {
      quantity: DataTypes.INTEGER,
      sub_total: DataTypes.INTEGER,
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
      modelName: "order_detail",
    }
  );
  return order_detail;
};
