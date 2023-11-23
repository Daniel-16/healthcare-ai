import express from "express";
import { createUser, loginUser } from "../controllers/createUser.js";
import createDoctor from "../controllers/doctor.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/createDoc", createDoctor);
export default router;
