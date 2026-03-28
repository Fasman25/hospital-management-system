import express from "express";
const router = express.Router();

// Import controller functions using ES module syntax
import {
  createDoctor,
  getDoctors,
  getDoctorsById,  // fixed typo from getDocotrsById
  updateDoctor,
  deleteDoctor
} from "../controllers/doctorController.js"; // ✅ add .js extension

// Define routes
router.post("/", createDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctorsById);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

// Export router
export default router;