import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import DoctorModel from "../models/Doctor.js";

//Create json-web-token
const createToken = (_id, email) => {
  return jwt.sign({ userId: _id, email }, `${process.env.JWT_SECRET}`, {
    expiresIn: "7d",
  });
};

export const createUser = async (req, res) => {
  const { fullname, email, accountType, password, doctorProfile } = req.body;
  try {
    let user;
    if (accountType === "Doctor") {
      const newDocProfile = await DoctorModel.create(doctorProfile);
      user = await UserModel.create({
        fullname,
        email,
        accountType,
        password,
        doctorProfile: newDocProfile._id,
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
