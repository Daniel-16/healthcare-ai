import express from "express";
import cors from "cors";
import connectDB from "./utils/mongoDB.js";
import router from "./routes/router.js";
import "dotenv/config.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 7000;
try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
} catch (error) {
  console.log(error);
}
