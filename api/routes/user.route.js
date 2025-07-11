const express = require("express")
const { test } = require("../ontrollers/user.controller")
const userRoutes = express.Router()

userRoutes.get("/", test)

module.exports = userRoutes