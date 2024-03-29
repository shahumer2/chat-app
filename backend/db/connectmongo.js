import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectToMongo=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connect to db");
        
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;