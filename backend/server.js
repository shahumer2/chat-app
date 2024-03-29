import express from "express"
import dotenv from "dotenv"
import authRoute from "./ROUTES/auth.route.js"
import messageRoute from "./ROUTES/message.route.js"
import userRoute from "./ROUTES/user.route.js"
import connectToMongo from "./db/connectmongo.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { VerifyUser } from "./middleware/verifyUser.js";
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
dotenv.config();
const PORT =process.env.PORT
//cookie parser used to get the cookie value 
app.use(cookieParser())




app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/user",userRoute)

app.listen(PORT,()=>{
    connectToMongo();
    console.log(`app is listening at port ${PORT}`)
})