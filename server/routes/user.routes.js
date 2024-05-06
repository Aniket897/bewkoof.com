const {
  addToWishlist,
  getWishlist,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const routes = require("express").Router();

routes.post("/wishlist/:id", verifyToken, addToWishlist);
routes.get("/wishlist", verifyToken, getWishlist);

module.exports = routes;
