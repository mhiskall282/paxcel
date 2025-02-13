const express = require("express");
const bodyParser = require("body-parser");
const swaggerSetup = require("./config/swagger.js");

const mainRoutes = require("./routes/main.js");
const authRoutes = require("./routes/authRoutes");
const shipmentRoute = require("./routes/shipmentRoutes.js");
const receiverRoute = require("./routes/receiverRoutes.js");
const blockchainRoute = require("./routes/blockchainRoutes.js")

const sequelize = require("./config/dbconfig.js");

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
    origin: ["http://localhost:3000", "http://localhost:5173"], // Replace with your client's origin
  })
);

app.use("/api", authRoutes);
app.use("/api", mainRoutes);
app.use("/api", shipmentRoute);
app.use("/api",receiverRoute)
app.use("/api",blockchainRoute)




app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});
