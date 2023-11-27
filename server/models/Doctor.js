import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  medLicenseNo: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  yearsOfExp: {
    type: Number,
    required: true,
  },
});

const DoctorModel = mongoose.model("Doctor", DoctorSchema);
export default DoctorModel;
