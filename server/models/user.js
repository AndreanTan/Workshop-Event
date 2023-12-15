"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cart, order, history_data_order }) {
      this.hasMany(cart, { foreignKey: "user_id" }),
        this.hasMany(order, { foreignKey: "user_id" }),
        this.hasMany(history_data_order, { foreignKey: "user_id" });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      verification_code: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["Verified", "Unverified"],
        defaultValue: "Unverified",
      },
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
      modelName: "user",
    }
  );
  return user;
};
