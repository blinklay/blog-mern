const { Router } = require("express");
const { signup } = require("../ontrollers/auth.controller");
const authRoutes = new Router()

authRoutes.post("/signup", signup)

module.exports = authRoutes;
