const { addProduct } = require("../controllers/admin.controller");

const routes = require("express").Router();

routes.post("/add-product", addProduct);

module.exports = routes;
