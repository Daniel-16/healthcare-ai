import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      success: false,
      error: "Authorization token required",
    });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await UserModel.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
