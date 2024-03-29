import mongoose from "mongoose";


const messageSchema= new mongoose.Schema(
    {
    SenderId:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:true},
    


    RecieverId:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:true
},
    

    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
}


)
const Message= mongoose.model("Message",messageSchema)
export default Message