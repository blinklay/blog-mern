
import { validationResult } from "express-validator";
import Post from "../models/Post.js";

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find().populate({ path: "user", select: ["fullname", "avatarUrl"] }).exec()
    res.status(200).json(posts)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статьи!"
    })
  }
}

export const create = async (req, res) => {
  try {
    const doc = new Post({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const post = await doc.save()
    res.status(200).json(post)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось создать пост!"
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id

    Post.findOneAndUpdate(
      { _id: postId }, { $inc: { viewsCount: 1 } }, { returnDocument: "After" })
      .then(doc => res.json(doc))
      .catch(err => res.status(500).json({ message: "Статья не найдена" }))

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статью!"
    })
  }
}

export const remove = async (req, res) => {
  try {
    const postId = req.params.id
    Post.findOneAndDelete({
      _id: postId
    })
      .then(() => res.json({ message: "Статья успешно удалена!" }))
      .catch(err => res.status(500).json({ message: "Не удалось удалить статью!" }))
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Не удалось удалить статью!'
    })
  }
}

export const update = async (req, res) => {
  try {
    const postId = req.params.id;
    Post.findOneAndUpdate({
      _id: postId
    }, {
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.userId
    })
      .then(() => res.status(200).json({ message: "Статья успешно обновлена!" }))
      .catch(err => {
        console.log(err);
        return res.status(500).json({
          message: "Не удалось обновить статью!"
        })
      })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось обновить статью!"
    })
  }
}