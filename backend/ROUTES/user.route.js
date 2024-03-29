import  express  from "express";
import { VerifyUser } from "../middleware/verifyUser.js";
import { getUser } from "../controller/user.controller.js";

const router=express.Router();

router.get("/userforsidebar",VerifyUser,getUser)

export default router;