require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const port = 5050
const app = express()

mongoose.connect(process.env.MONGO)
  .then(() => console.log("MONGODB is connected!"))
  .catch(err => {
    console.log("MONGODB is not connected!", err);
  })

app.listen(port, () => {
  console.log("Server is running on port:", port);
})