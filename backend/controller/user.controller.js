import User from "../models/user.model.js"

export const getUser = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is properly set by your middleware

        const user = await User.find({ _id: { $ne: userId } }).select("-password");
        res.status(201).json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error finding users" });
    }
}
