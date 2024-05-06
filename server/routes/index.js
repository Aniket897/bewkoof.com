const routes = require("express").Router();
const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");
const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");

routes.use("/auth", authRoutes);
routes.use("/admin", adminRoutes);
routes.use("/product", productRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
