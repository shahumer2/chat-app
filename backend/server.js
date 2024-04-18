import express from "express"
import path from "path"
import dotenv from "dotenv"
import authRoute from "./ROUTES/auth.route.js"
import messageRoute from "./ROUTES/message.route.js"
import userRoute from "./ROUTES/user.route.js"
import connectToMongo from "./db/connectmongo.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { VerifyUser } from "./middleware/verifyUser.js";
import { app, server } from "./socket/socket.js"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
dotenv.config();
const PORT =process.env.PORT

const __dirname= path.resolve();
//cookie parser used to get the cookie value 
app.use(cookieParser())




app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/user",userRoute)

// for deployement to seve as static files images an all
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.static(path.join(__dirname,"/frontend/dist")))

// to run frontend from server
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
server.listen(PORT,()=>{
    connectToMongo();
    console.log(`app is listening at port ${PORT}`)
})