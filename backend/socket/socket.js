import { Server } from "socket.io";

import http from "http"
import express from "express"
import { Socket } from "dgram";

const app = express();
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3001"],
        methods:["GET,POST"]
    }
})
 const getRecieverSocketId=(recieverId)=>{
return userSocketMap[recieverId]
}
const userSocketMap={}
io.on("connection",(socket)=>{
    console.log("user connected",socket.id);
    const userId = socket.handshake.query.userId
    

    if(userId!="undefined"){
        userSocketMap[userId]=socket.id
        
    }
    //io.emit is used to send event to all connected users
    io.emit("getOnlineUSers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("user dissconncted",socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUSers",Object.keys(userSocketMap))
    })



})
export {app,io,server,getRecieverSocketId}