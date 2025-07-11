require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const port = 5050
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO)
  .then(() => console.log("MONGODB is connected!"))
  .catch(err => {
    console.log("MONGODB is not connected!", err);
  })

app.listen(port, () => {
  console.log("Server is running on port:", port);
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)