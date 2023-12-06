"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workshop_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ workshop }) {
      this.hasMany(workshop, { foreignKey: "category_type" });
    }
  }
  workshop_category.init(
    {
      category_name: DataTypes.STRING,
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
      modelName: "workshop_category",
    }
  );
  return workshop_category;
};
