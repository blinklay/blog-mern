import express from "express"
import mongoose from "mongoose"
import { loginValidator, registerValidator } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import { getMe, login, register } from "./controllers/UserController.js";

mongoose.connect("mongodb+srv://admon:123qwe@cluster0.ajko2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB ok!");
  })
  .catch(err => {
    console.log(err)
  })

const app = express()
app.use(express.json())

app.post('/auth/register', registerValidator, register)
app.post("/auth/login", loginValidator, login)
app.get("/auth/me", checkAuth, getMe)

app.listen(3000, (err) => {
  if (err) {
    return err
  }

  console.log("App start");
})