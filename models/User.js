import mongoose from "mongoose";

const User = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
  },
  avatarUrL: String
}, {
  timestamps: true
})

export default mongoose.model("User", User)