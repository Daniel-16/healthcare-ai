import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  medLicenseNo: String,
  specialization: String,
  yearsOfExp: Number,
});

const DoctorModel = mongoose.model("Doctor", DoctorSchema);
export default DoctorModel;
