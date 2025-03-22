import express from "express";
import { login, register } from "./../controllers/authController.js";
// import { googleLogin } from "../controllers/authController.js";


const router = express.Router()

router.post('/register', register)
router.post('/login', login)
// router.post("/google", googleLogin);
// Google registration route



export default router
