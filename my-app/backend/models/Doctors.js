import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  
    },
    email: {
      type: String,
      required: true,
      unique: true,  
    },
    specialization: {
      type: String,
      required: true,
    },
    phone: String,
    department: String,
    experience: Number,
  },
  { timestamps: true }
);

// ✅ Use ES module export
const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;