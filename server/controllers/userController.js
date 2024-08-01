import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ name, email, age });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("[CREATE USER ERROR]", error.message);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("[GET ALL USERS ERROR]", error.message);
    }
}

export { createUser, getAllUsers };
