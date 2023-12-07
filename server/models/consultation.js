import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctroId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Consultation = mongoose.model("Consultation", consultationSchema);
export default Consultation;
