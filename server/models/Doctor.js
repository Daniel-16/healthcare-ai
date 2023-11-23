import mongoose from "mongoose";
import UserModel from "./User.js";

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

const DoctorModel = UserModel.discriminator("Doctor", DoctorSchema, {
  accountType: "Doctor",
});

export default DoctorModel;
