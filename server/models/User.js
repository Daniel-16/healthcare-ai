import mongoose from "mongoose";
import bcrypt from "bcrypt";
import DoctorSchema from "./Doctor";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  accountType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  doctorsInfo: {
    type: DoctorSchema,
    required: function () {
      return this.accountType === "Doctor";
    },
  },
});

//Function before saving to DB
UserSchema.pre("save", async function (next) {
  const email = this.email;
  const user = await UserModel.findOne({ email });
  try {
    if (user) {
      const emailExists = new Error("Email already in use");
      return next(emailExists);
    }
  } catch (error) {
    throw new Error(error);
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.path("doctorsInfo").validate(function () {
  return this.accountType === "Doctor";
}, "Doctor info is not filled out for Doctor account type");

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
