"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workshop_languange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ workshop }) {
      this.hasMany(workshop, { foreignKey: "languange_id" });
    }
  }
  workshop_languange.init(
    {
      languange: DataTypes.STRING,
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
      modelName: "workshop_languange",
    }
  );
  return workshop_languange;
};
