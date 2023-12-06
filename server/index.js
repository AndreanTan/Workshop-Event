const express = require("express");
const db = require("./models");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(201).send("<h1>Welcome to my api!</h1>");
});

// Menjalankan sync() secara manual
// db.order
//   .sync()
//   .then(() => {
//     console.log("Model synchronized with database");
//   })
//   .catch((error) => {
//     console.error("Error syncing model with database:", error);
//   });

app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR:${err}`);
  } else {
    // db.sequelize.sync({ alter: true });
    console.log(`APP RUNNING at ${port} ✅`);
  }
});
