import User from "../models/user.model.js";

export const getUserToSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.params._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId }  }).select("-password") // Filter out the user who is making the request minus their passwords

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log("Error in getUSerToSidebar function", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}