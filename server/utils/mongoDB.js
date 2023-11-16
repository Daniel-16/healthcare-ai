import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/healthcare-app");
    // console.log(db);
    // mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    // });
  } catch (error) {
    console.log("Couldn't connect to DB");
  }
};

export default connectDB;
