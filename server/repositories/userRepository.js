const db = require("../models");
const { match, hash } = require("../helper/hasing");

module.exports = {
  createUser: async (body) => {
    try {
      const { username, password, email } = body;

      const checkEmail = await db.user.findOne({ where: { email } });

      if (checkEmail) throw { message: "email already used" };
      const hashPassword = await hash(password);

      const registerUser = await db.user.create({
        username,
        password: hashPassword,
        email,
      });

      if (!registerUser)
        return {
          isError: true,
          message: "Regist user is failed!",
        };

      return {
        isError: true,
        message: "Regist user is Success!",
      };
    } catch (error) {
      return error;
    }
  },
  userLogin: async (body) => {
    try {
      const { username, password, email } = body;

      const checkUser = await db.user.findOne({ where: { email } });
      console.log(checkUser.dataValues);

      if (!checkUser) {
        return {
          isError: true,
          message: "account is not found!",
        };
      }

      const hashMatch = await match(password, checkUser.dataValues.password);
      if (!hashMatch)
        return {
          isError: true,
          message: "Incorrect password. Please try again.",
        };

      return {
        isError: false,
        message: "Login successful. Welcome back!",
        data: {
          username: checkUser.dataValues.username,
          id: checkUser.dataValues.id,
        },
      };
    } catch (error) {
      return error;
    }
  },
};
