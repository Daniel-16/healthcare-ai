import express from "express";
import { createUser, loginUser } from "../controllers/createUser.js";
import createDoctor from "../controllers/doctor.js";
import { getAllDoctors } from "../controllers/getDoctor.js";
import { requireAuth } from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/createDoc", createDoctor);

//Get All Doctors
// router.use(requireAuth);
router.get("/doctors", requireAuth, getAllDoctors);
export default router;
