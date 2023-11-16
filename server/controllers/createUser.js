import UserModel from "../models/User.js";

const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await UserModel.create({ username });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default createUser;
