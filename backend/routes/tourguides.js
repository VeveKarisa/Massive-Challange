import express from "express";

import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createTourGuide,
  deleteTourGuide,
  getAllTourGuide,
  getFeaturedTourGuide,
  getSingleTourGuide,
  getTourGuideBySearch,
  getTourGuideCount,
  updateTourGuide,
} from "../controllers/tourguideController.js";

const router = express.Router();

// create new HomeStay
router.post("/", createTourGuide);
// update new HomeStay
router.put("/:id", verifyAdmin, updateTourGuide);
// delete new HomeStay
router.delete("/:id", verifyAdmin, deleteTourGuide);
// get single HomeStay
router.get("/:id", getSingleTourGuide);
// get all HomeStay
router.get("/", getAllTourGuide);
// get HomeStay by search
router.get("/search/getTourGuideBySearch", getTourGuideBySearch);
router.get("/search/getFeaturedTourGuide", getFeaturedTourGuide);
router.get("/search/getTourGuideCount", getTourGuideCount);

export default router;
