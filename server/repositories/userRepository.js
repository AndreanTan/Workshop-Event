const db = require("../models");
const { match, hash } = require("../helper/hasing");

module.exports = {
  createUser: async (body) => {
    try {
      const { username, password, email } = body;

      const checkEmail = await db.user.findOne({ where: { email } });

      if (checkEmail) throw { isError: true, message: "email already used" };
      const hashPassword = await hash(password);

      const registerUser = await db.user.create({
        username,
        password: hashPassword,
        email,
      });

      if (!registerUser)
        return {
          isError: true,
          message: "Register user is Failed!",
        };

      return {
        isError: false,
        message: "Register user is Success!",
      };
    } catch (error) {
      return error;
    }
  },
  userLogin: async (body) => {
    try {
      const { password, email } = body;

      const checkUser = await db.user.findOne({ where: { email } });
      console.log(checkUser);

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
