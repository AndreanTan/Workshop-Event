const { hash, match } = require("../helper/hasing");
const { createUser, userLogin } = require("../repositories/userRepository");
const respHandler = require("../utils/respHandler");
const db = require("./../models");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const result = await createUser(req.body);
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
  login: async (req, res, next) => {
    try {
      const result = await userLogin(req.body);
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
