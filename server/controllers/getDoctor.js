import UserModel from "../models/user.js";
import DoctorModel from "../models/doctor.js";

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({});
    res.status(201).json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

export const searchDoctor = async (req, res) => {
  const { specialization } = req.body;
  try {
    const doctor = await DoctorModel.find({ specialization });
    if (doctor.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No doctors found with the specified specialization",
      });
    }
    res.status(201).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
