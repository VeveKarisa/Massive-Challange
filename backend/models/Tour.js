import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
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
    harga: {
      type: Number,
      required: true,
    },
    maksOrang: {
      type: Number,
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

export default mongoose.model("Tour", tourSchema);
