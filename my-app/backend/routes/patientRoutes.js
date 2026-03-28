import express from "express";
import Patient from "../models/Patient.js";
import sendConfirmationEmail from "../utils/sendEmail.js";

const router = express.Router();

// ✅ Register patient + send email
router.post("/register", async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    // Send email
    await sendConfirmationEmail(patient);

    res.status(201).json({
      message: "Patient registered successfully",
      patient
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;