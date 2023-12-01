import UserModel from "../models/user.js";

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await UserModel.find({ accountType: "Doctor" }).select(
      "-password"
    );
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
