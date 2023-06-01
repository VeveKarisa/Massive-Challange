import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({ success: true, message: "Successfuly created", data: savedTour });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to create. Try again" });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfuly updated",
      data: updateTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
      data: updateTour,
    });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfuly deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
      data: deleteTour,
    });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "Successful",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      data: deleteTour,
    });
  }
};

// getAll tour
export const getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      data: deleteTour,
    });
  }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
  const kota = new RegExp(req.query.kota, "i");
  const maksOrang = parseInt(req.query.maksOrang);

  try {
    // gte = greater than equal
    const tours = await Tour.find({
      kota,
      maksOrang: { $gte: maksOrang },
    });
    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get feature tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ unggulan: true }).limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      data: deleteTour,
    });
  }
};

// get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
