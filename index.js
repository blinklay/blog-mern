import express from "express"
import mongoose from "mongoose"
import { loginValidator, postCreateValidator, registerValidator } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./controllers/UserController.js";
import { create, getAll, getOne, remove, update } from "./controllers/PostController.js";
import multer from "multer";
import handleErrors from "./utils/handleErrors.js";

mongoose.connect("mongodb+srv://admon:123qwe@cluster0.ajko2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB ok!");
  })
  .catch(err => {
    console.log(err)
  })

const app = express()

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads")
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.post('/auth/register', registerValidator, handleErrors, register)
app.post("/auth/login", loginValidator, handleErrors, login)
app.get("/auth/me", checkAuth, getMe)

app.post("/uploads", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`
  })
})

app.get("/posts", getAll)
app.get("/posts/:id", getOne)
app.post("/posts", checkAuth, postCreateValidator, handleErrors, create)
app.delete("/posts/:id", checkAuth, remove)
app.patch("/posts/:id", checkAuth, postCreateValidator, handleErrors, update)

app.listen(3000, (err) => {
  if (err) {
    return err
  }

  console.log("App start");
})