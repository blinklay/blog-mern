import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const hash = bcrypt.hashSync(req.body.password, 7)

    const doc = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      passwordHash: hash,
      avatarUrl: req.body.avatarUrl,
    })

    const user = await doc.save()
    const token = jwt.sign({
      _id: user._id
    }, "secret123", {
      expiresIn: "30d"
    })

    const { passwordHash, ...userData } = user._doc

    return res.json({ ...userData, token })
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Не удалось зарегестрироваться!"
    })
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({
        message: "Имя пользователя или пароль не верны!"
      })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValidPassword) {
      return res.status(400).json({
        message: "Имя пользователя или пароль не верны!"
      })
    }

    const token = jwt.sign({
      _id: user._id
    }, "secret123", {
      expiresIn: "30d"
    })

    const { passwordHash, ...userData } = user._doc

    return res.json({ ...userData, token })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось авторизироваться!'
    })
  }
}

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден!"
      })
    }

    const { passwordHash, ...userData } = user._doc

    return res.json(userData)
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Нет доступа!"
    })
  }
}