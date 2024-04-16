import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage=async(req,res)=>{
try {
    const {message}=req.body
    const{id:RecieverId}=req.params;
    const SenderId=req.user._id

    let conversation =await Conversation.findOne({
        participants:{$all:[SenderId,RecieverId]}
    });
    if(!conversation){
        conversation= await Conversation.create({
            participants:[SenderId,RecieverId]
        })
    }
    const newMessage = new Message({
        SenderId,
        RecieverId,
        message
    })
   
    if (newMessage){
        conversation.messages.push(newMessage._id)

    }
    // await conversation.save();
    // await newMessage.save();
    //this will run in parallel
    await Promise.all([conversation.save(),newMessage.save()])

    // socket io

    const recieverSockeId=getRecieverSocketId(RecieverId)
    if(recieverSockeId){
        io.to(recieverSockeId).emit("newMessage",newMessage)
    }
    res.status(201).json(newMessage)

    
} catch (error) {
    return res.status(500).json({error:"cannot send message"})
}
}

export const getMessages=async(req,res)=>{
    try {
        const {id:userTochat}=req.params
        const senderId=req.user._id
        console.log(senderId,userTochat);

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userTochat]},
        }).populate("messages")
        if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

res.status(200).json(messages)
        
    } catch (error) {
        return res.status(500).json({error:"cannot get messages"})
    }

}