import mongoose from "mongoose";

const conversationSchema= new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"user"
        }],
        messages:[
            {
                type:mongoose.Schema.ObjectId,
                ref:"Message"
            }
        ]
    
},{timestamps:true})
const Conversation= mongoose.model("conversation",conversationSchema)
export default Conversation