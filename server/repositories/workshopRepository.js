const { Sequelize } = require("sequelize");
const db = require("../models");
const workshop_category = require("../models/workshop_category");
const { query } = require("express");

module.exports = {
  fetchAllWorkshop: async (query) => {
    try {
      const { category } = query;

      const getWorkshopByCategory = await db.workshop.findAll({
        where: { category_type: category },
      });
      if (!getWorkshopByCategory)
        return { isError: true, message: "Workshop is not found!" };

      return {
        isError: false,
        message: "Get Data Workshop is Success!",
        data: getWorkshopByCategory,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getCategory: async () => {
    try {
      const getData = await db.workshop_category.findAll({
        include: [
          {
            model: db.workshop,
            where: {
              category_type: Sequelize.literal("`workshop_category`.`id`"),
            },
          },
        ],
      });
      console.log(getData);
      return {
        isError: false,
        message: "Success Get Workshop Category",
        data: getData,
      };
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (query) => {
    try {
      const { id } = query;
      const getData = await db.workshop.findByPk(id);
      console.log(id);
      return {
        isError: false,
        message: "get data success!",
        data: getData,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
