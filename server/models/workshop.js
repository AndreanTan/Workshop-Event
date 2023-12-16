"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workshop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      order_detail,
      workshop_category,
      workshop_languange,
      workshop_image,
    }) {
      this.hasMany(order_detail, { foreignKey: "workshop_id" });
      this.belongsTo(workshop_category, { foreignKey: "category_type" });
      this.belongsTo(workshop_languange, { foreignKey: "languange_id" });
      this.hasMany(workshop_image, { foreignKey: "workshop_id" });
    }
  }
  workshop.init(
    {
      workshop_name: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      workshop_duration: DataTypes.STRING,
      description_1: DataTypes.TEXT,
      description_2: DataTypes.TEXT,
      category_type: DataTypes.INTEGER,
      ratings: DataTypes.INTEGER,
      workshop_image: DataTypes.STRING,
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
      modelName: "workshop",
    }
  );
  return workshop;
};
