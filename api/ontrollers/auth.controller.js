const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs")
const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === "" || password === "" || email === "") {
    return res.status(400).json({
      message: "All fields are required!"
    })
  }

  const password_hash = bcryptjs.hashSync(password, 10)

  const newUser = new userModel({
    username, email, password: password_hash
  })

  try {
    await newUser.save()
    res.status(200).json("signup successful")
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { signup }