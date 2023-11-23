import DoctorModel from "../models/Doctor.js";

const createDoctor = async (req, res) => {
  const { medLicenseNo, specialization, yearsOfExp } = req.body;
  try {
    const doctor = await DoctorModel.create({
      medLicenseNo,
      specialization,
      yearsOfExp,
    });
    res.status(201).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default createDoctor;
