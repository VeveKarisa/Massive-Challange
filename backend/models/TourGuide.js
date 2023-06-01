import mongoose from "mongoose";

const tourguideSchema = new mongoose.Schema(
  {
    nama: {
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
    bahasa: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    unggulan: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TourGuide", tourguideSchema);
