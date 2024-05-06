const { Login, Register } = require("../controllers/auth.controller");

const routes = require("express").Router();

routes.post("/login", Login);
routes.post("/register", Register);

module.exports = routes;
