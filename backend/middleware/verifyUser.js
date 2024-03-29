import  jwt  from "jsonwebtoken";
import User from "../models/user.model.js";
// it is used to check the current user user id by req.user in message controller to check the id
export const VerifyUser=async(req,res,next)=>{
    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({error:"unauthorize"})
        }
        const decoder = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoder){
            return res.status(401).json({error:"unauthorize token"}) 
        }
        const user = await User.findById(decoder.userId.toString()).select("-password") // to not send password along
        if(!user){
            return res.status(401).json({error:"unauthorize token"}) 
        }
        req.user=user;
        next(); // then call the next function that is after middleware
    } catch (error) {
        console.log("something wrong");
        return res.status(500).json({error:"you are not authorize"})
        
    }


}