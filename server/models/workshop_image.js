"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workshop_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ workshop }) {
      this.belongsTo(workshop, { foreignKey: "workshop_id" });
    }
  }
  workshop_image.init(
    {
      path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "workshop_image",
    }
  );
  return workshop_image;
};
