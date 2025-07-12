const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === "" || password === "" || email === "") {
    next(errorHandler(400, "All fields are required!"))
  }

  const password_hash = bcryptjs.hashSync(password, 10)

  const newUser = new userModel({
    username, email, password: password_hash
  })

  try {
    await newUser.save()
    res.status(200).json("signup successful")
  } catch (error) {
    next(error)
  }
}

module.exports = { signup }