
import { validationResult } from "express-validator";
import Post from "../models/Post.js";

export const create = async (req, res) => {
  try {
    const doc = new Post({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось создать пост!"
    })
  }
}