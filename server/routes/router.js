import express from "express";
import { createUser, loginUser } from "../controllers/createUser.js";
import createDoctor from "../controllers/doctor.js";
import { getAllDoctors, searchDoctor } from "../controllers/getDoctor.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { resetPassword } from "../controllers/resetPassword.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/createDoc", createDoctor);

//Get All Doctors
// router.use(requireAuth);
router.get("/doctors", requireAuth, getAllDoctors);
router.get("/searchDoctor", requireAuth, searchDoctor);
router.put("/resetPassword/:resetToken", resetPassword);
export default router;
