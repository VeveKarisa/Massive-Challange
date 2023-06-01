import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: true,
      unique: true,
    },
    kota: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    hargalokal: {
      type: Number,
      required: true,
    },
    hargainter: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Destination", destinationSchema);
