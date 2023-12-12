import UserModel from "../models/user.js";
import crypto from "crypto";
import { createToken } from "../config/createToken.js";

export const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  try {
    const user = await UserModel.findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return new Error("Invalid token");
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.status(201).json({
      success: true,
      message: "Password reset successfull",
      token: createToken(user._id, user.email),
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
