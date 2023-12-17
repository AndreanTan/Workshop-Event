const db = require("../models");
const { match, hash } = require("../helper/hasing");
const handlebars = require("handlebars");
const transporter = require("./../helper/transporter");
const { createRandomNumber } = require("../utils/util");
const { createJWT } = require("../lib/jwt");
const fs = require("fs").promises;

module.exports = {
  createUser: async (body) => {
    try {
      const { username, password, email } = body;

      const checkEmail = await db.user.findOne({ where: { email } });

      if (checkEmail) throw { isError: true, message: "email already used" };
      const hashPassword = await hash(password);
      const randNum = createRandomNumber();

      const registerUser = await db.user.create({
        username,
        password: hashPassword,
        email,
        verification_code: randNum,
      });

      if (!registerUser)
        return {
          isError: true,
          message: "Register user is Failed!",
        };

      const token = createJWT({ id: registerUser.dataValues.id }, "1h");
      // const encodedToken = encodeURIComponent(token).replace(/\./g, "&#46;");
      console.log(token);
      const readTemplate = await fs.readFile("./public/verif-2.html", "utf-8");
      const compiledTemplate = await handlebars.compile(readTemplate);
      const newTemplate = compiledTemplate({
        username: registerUser.dataValues.username,
        token,
        verification_code: randNum,
      });

      await transporter.sendMail({
        from: "JELAJAH",
        to: registerUser.dataValues.email,
        subject: "Two-factor authentication",
        html: newTemplate,
      });

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
      const token = await createJWT({ id: checkUser.dataValues.id }, "2h");

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
          email: checkUser.dataValues.email,
          id: checkUser.dataValues.id,
          token: token,
        },
      };
    } catch (error) {
      return error;
    }
  },
  verifyUser: async (body, dataToken) => {
    try {
      const { code } = body;
      const { id } = dataToken;
      console.log(id, code);
      if (!code) return { isError: true, message: "Please provide a value!" };
      const checkUser = await db.user.findByPk(id);
      console.log(checkUser.dataValues);
      if (!checkUser) return { isError: true, message: "User is not found!" };

      if (code !== checkUser.dataValues.verification_code)
        return { isError: true, message: "Code verification Wrong!" };

      const updateStatus = await db.user.update(
        {
          status: "Verified",
        },
        {
          where: { id: id },
        }
      );
      const token = await createJWT({ id: id }, "2h");
      console.log(updateStatus);
      if (!updateStatus)
        return { isError: true, message: "Update Status User Failed!" };

      return {
        isError: false,
        message: "Update Status User Success!",
        data: {
          username: checkUser.dataValues.username,
          email: checkUser.dataValues.email,
          token: token,
        },
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  verifyUserAccess: async (dataToken) => {
    try {
      const { id } = dataToken;

      const checkUser = await db.user.findByPk(id);

      if (!checkUser) return { isError: true, message: "User is not found!" };

      return {
        isError: false,
        message: "JWT still going!",
        data: {
          username: checkUser.dataValues.username,
          email: checkUser.dataValues.email,
          id: checkUser.dataValues.id,
        },
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
