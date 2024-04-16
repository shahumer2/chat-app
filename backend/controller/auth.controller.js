import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";
export const signup= async (req,res)=>{
 try {
    console.log(req.body);
     const {username,fullName,password,confirmPassword,gender}=req.body;
     if(password!==confirmPassword){
        return res.status(400).json({error:"Password Dont Match"})
     }
     const user = await User.findOne({username})
     if(user){
        return res.status(400).json({error:"username Already Exists"})
     }
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser= new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==="male"?boyProfilePic:girlProfilePic
    })
    generateToken(newUser._id,res)
    await newUser.save();
    res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
    })
 } catch (error) {
    console.log(error);
 }
}
export const loginuser=async(req,res)=>{
    try {
    const {username,password}=req.body;
   const user= await User.findOne({username})
//    if(!user){
//     return res.status(401).json({error:"username not Found !!"})
//    }
   const isPasswordCorrect = await bcrypt.compare(password,user.password||"")
   if(!isPasswordCorrect||!user){
    return res.status(401).json({error:"invalid Credentials"})
   }
   generateToken(user._id,res)
   res.status(201).json({
    _id:user._id,
    fullName:user.fullName,
    username:user.username,
    profilePic:user.profilePic
})
    } catch (error) {
        console.log(error);
        
    }
}
export const logout=(req,res)=>{
   try {
    res.cookie("jwt","",{
        maxAge:0
    })
    res.status(200).json({message:"logout successfully"})
    
   } catch (error) {
    console.log(error);
   }
}