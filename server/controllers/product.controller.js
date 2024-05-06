const productModel = require("../models/product.model");

exports.getProduct = async (req, resp, next) => {
  try {
    const { id } = req.params;

    const product = await productModel.findById(id);

    if (!product) {
      return resp.status(400).json({
        message: "Product not found",
      });
    }

    resp.status(200).json(product);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.searchProducts = async (req, resp, next) => {
  try {
    const query = req.params.q;

    console.log(query);

    const products = await productModel.find({
      $or: [
        { name: { $regex: new RegExp(query, "i") } },
        { category: new RegExp(query, "i") },
      ],
    });

    resp.status(200).json(products);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.getProducts = async (req, resp, next) => {
  try {
    const { limit = 20, skip = 0, category, gender } = req.query;

    console.log(limit, skip, category, gender);

    const products = await productModel
      .find({
        $and: [category ? { category: { $in: category } } : {}],
      })
      .skip(skip)
      .limit(limit);

    resp.status(200).json(products);
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
