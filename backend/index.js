const express = require("express");
const bodyParser = require("body-parser");
const swaggerSetup = require("./config/swagger.js");
const mainRoutes = require("./routes/main.js");
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./config/dbconfig.js")
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

swaggerSetup(app);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
  })
);

app.use("/api", mainRoutes);

app.use("/api", authRoutes);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});
