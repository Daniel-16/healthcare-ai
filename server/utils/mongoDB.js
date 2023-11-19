import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_LOCAL}`);
    // console.log(db);
    // mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    // });
  } catch (error) {
    console.log("Couldn't connect to DB", error);
  }
};

export default connectDB;
