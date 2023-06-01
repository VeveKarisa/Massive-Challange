import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    katasandi: {
      type: String,
      required: true,
    },
    namad: {
      type: String,
      required: true,
    },
    namab: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    tmptlahir: {
      type: String,
      required: true,
    },
    tgllahir: {
      type: String,
      required: true,
    },
    tmpttinggal: {
      type: String,
      required: true,
    },
    nohp: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
