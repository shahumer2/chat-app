import  express  from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import { VerifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/send/:id",VerifyUser,sendMessage)
router.get("/:id",VerifyUser,getMessages)
export default router;