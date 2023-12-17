const express = require("express");
const db = require("./models");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const {
  userRouter,
  cartRouter,
  orderRouter,
  payMethodRouter,
  paymentRouter,
  workshopRouter,
} = require("./routers");
// app.get("/", (req, res) => {
//   res.status(201).send("<h1>Welcome to my api!</h1>");
// });
app.use("/api", [
  userRouter,
  cartRouter,
  orderRouter,
  payMethodRouter,
  paymentRouter,
  workshopRouter,
]);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || "Error";

  return res.status(statusCode).send({
    isError: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR:${err}`);
  } else {
    // db.sequelize.sync({ alter: true });
    console.log(`APP RUNNING at ${port} ✅`);
  }
});
