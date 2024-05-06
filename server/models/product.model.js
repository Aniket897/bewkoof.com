const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    description: {
      type: String,
      required: [true, "product name is discription"],
    },
    thumbnailImage: {
      type: String,
      required: [true, "product thumbnailImage is required"],
    },
    images: {
      type: Array,
      default: [],
    },
    manufacturer_brand: {
      type: String,
      required: [true, "product manufacturer_brand is requried"],
    },
    price: {
      type: Number,
      required: [true, "product price is requried"],
    },
    in_stock: {
      type: Number,
      required: [true, "product in_stock is requried"],
    },
    category: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
