import HomeStay from "../models/HomeStay.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const homestayId = req.params.homestayId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();

    //  after creating a new review now update the reviews array of the homestay
    await HomeStay.findByIdAndUpdate(homestayId, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to submit" });
  }
};
