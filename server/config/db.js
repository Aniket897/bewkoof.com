const mongoose = require("mongoose");

async function connectMongoose() {
  const url = process.env.MONGO_URL;
  mongoose
    .connect(url, {
      dbName: "orderfood",
    })
    .then(() => {
      console.log("mongoose connected");
    })
    .catch((e) => {
      console.log("failed to connect mongoose", e);
    });
}

module.exports = connectMongoose;
