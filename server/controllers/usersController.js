const db = require("./../models");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const getData = await db.user.findAll();

      res.status(200).send({
        isError: false,
        message: "get Data user success!",
        data: getData,
      });
    } catch (error) {
      next(error);
    }
  },
};
