const {
  getProduct,
  getProducts,
  searchProducts,
} = require("../controllers/product.controller");

const routes = require("express").Router();

routes.get("/product/:id", getProduct);
routes.get(
  "/list",
  (req, resp, next) => {
    console.log(req);
    next();
  },
  getProducts
);
routes.get("/search/:q", searchProducts);

module.exports = routes;
