import  Jwt  from "jsonwebtoken";

export const generateToken=(userId,res)=>{

    const token = Jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    })
    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:30*24*60*60*1000 ,//in ms
        secure:"developement"!=="developement"
    })

}