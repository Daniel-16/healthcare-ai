import jwt from "jsonwebtoken";

export const createToken = (_id, email) => {
  return jwt.sign({ userId: _id, email }, `${process.env.JWT_SECRET}`, {
    expiresIn: "7d",
  });
};
