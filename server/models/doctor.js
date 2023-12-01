import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  doctorProfileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctorName: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
  medLicenseNo: {
    type: String,
    required: true,
    unique: true,
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

DoctorSchema.pre("save", async function (next) {
  const medLicenseNo = this.medLicenseNo;
  const checkDB = await DoctorModel.findOne({ medLicenseNo });
  try {
    if (checkDB) {
      const licenseNoExists = new Error(
        "An account with the provided license number already exists"
      );
      return next(licenseNoExists);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const DoctorModel = mongoose.model("Doctor", DoctorSchema);
export default DoctorModel;
