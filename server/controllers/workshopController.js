const db = require("./../models");
const respHandler = require("../utils/respHandler");
const {
  fetchAllWorkshop,
  getCategory,
  getById,
} = require("../repositories/workshopRepository");

module.exports = {
  getAllWorkshop: async (req, res, next) => {
    try {
      const result = await fetchAllWorkshop(req.query);
      respHandler(
        res,
        result.message,
        result.data ? result.data : null,
        null,
        result.isError
      );
    } catch (error) {
      next(error);
    }
  },
  getAllCategory: async (req, res, next) => {
    try {
      const result = await getCategory();
      respHandler(
        res,
        result.message,
        result.data ? result.data : null,
        null,
        result.isError
      );
    } catch (error) {
      next(error);
    }
  },
  getWorkshopById: async (req, res, next) => {
    try {
      const result = await getById(req.query);
      respHandler(
        res,
        result.message,
        result.data ? result.data : null,
        null,
        result.isError
      );
    } catch (error) {
      next(error);
    }
  },
};
