const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    required: [true, "userName is required"],
  },
  password: {
    type: String,
    required: [true, "userName is required"],
  },
  whishlist: [
    {
      type: mongoose.Types.ObjectId,
      ref: "products",
      default: [],
    },
  ],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
