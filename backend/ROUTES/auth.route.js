import express from"express"
import { loginuser, logout, signup } from "../controller/auth.controller.js";


const router= express.Router();

router.post("/login",loginuser)
router.post("/signup",signup)
router.post("/logout",logout)


export default router;