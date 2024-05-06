const productModel = require("../models/product.model");

exports.addProduct = async (req, resp, next) => {
  try {
    const {
      name,
      description,
      thumbnailImage,
      images,
      manufacturer_brand,
      price,
      in_stock,
      category,
    } = req.body;

    if (
      !name ||
      !description ||
      !thumbnailImage ||
      !images ||
      !manufacturer_brand ||
      !price ||
      !in_stock
    ) {
      return resp.status(400).json({
        message: "All fields are required",
      });
    }

    const product = await productModel.create({
      name,
      description,
      thumbnailImage,
      images,
      manufacturer_brand,
      price,
      category,
      in_stock,
    });

    resp.status(200).json(product);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
