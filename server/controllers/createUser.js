import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import DoctorModel from "../models/doctor.js";
import { createToken } from "../config/createToken.js";

export const createUser = async (req, res) => {
  const { fullname, email, accountType, password, doctorProfile } = req.body;
  try {
    let user;
    const doctor = await DoctorModel.findOne({
      medLicenseNo: doctorProfile.medLicenseNo,
    });
    if (doctor) {
      throw new Error("Med License number already exists");
    }
    if (accountType === "Doctor") {
      // const newDocProfile = await DoctorModel.create(doctorProfile);
      user = await UserModel.create({
        fullname,
        email,
        accountType,
        password,
        // doctorProfile: newDocProfile._id,
      });
      await DoctorModel.create({
        doctorProfileId: user._id,
        doctorName: user.fullname,
        ...doctorProfile,
      });
    } else {
      user = await UserModel.create({
        fullname,
        email,
        accountType,
        password,
      });
    }

    const token = createToken(user._id, user.email);

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("Invalid email or password. All fields must be filled");
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw Error("Incorrect email!");
    }
    const matchPwd = await bcrypt.compare(password, user.password);
    if (!matchPwd) {
      throw Error("Incorrect password!");
    }
    const token = createToken(user._id, user.email);
    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
