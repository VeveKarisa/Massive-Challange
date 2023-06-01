import express from "express";


import { verifyAdmin } from "../utils/verifyToken.js";
import { createDestination, deleteDestination, getAllDestination, getDestinationBySearch, getDestinationCount, getSingleDestination, updateDestination } from "../controllers/destinasiController.js";

const router = express.Router();

// create new HomeStay
router.post("/", verifyAdmin, createDestination);
// update new HomeStay
router.put("/:id", verifyAdmin, updateDestination);
// delete new HomeStay
router.delete("/:id", verifyAdmin, deleteDestination);
// get single HomeStay
router.get("/:id", getSingleDestination);
// get all HomeStay
router.get("/", getAllDestination);
// get HomeStay by search
router.get("/search/getDestinationBySearch", getDestinationBySearch);
router.get("/search/getDestinationCount", getDestinationCount);

export default router;
