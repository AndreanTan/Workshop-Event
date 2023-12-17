"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mst_payment_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ payment }) {
      this.hasMany(payment, { foreignKey: "mst_payment_method_id" });
    }
  }
  mst_payment_method.init(
    {
      method_name: DataTypes.STRING,
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
      modelName: "mst_payment_method",
    }
  );
  return mst_payment_method;
};
