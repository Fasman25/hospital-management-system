import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import all route modules using ES module syntax
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js"; // ✅ fixed import

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);