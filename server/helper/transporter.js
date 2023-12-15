const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andrean923@gmail.com",
    pass: "btyimygsbeipvfyd",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
