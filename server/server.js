const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectMongoose = require("./config/db");
const port = process.env.PORT || 8000;
const routes = require("./routes");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get("/", async (req, resp) => {
  resp.json({ message: "Server running" });
});

app.listen(port, () => {
  console.log("server running on port", port);
  connectMongoose();
});
