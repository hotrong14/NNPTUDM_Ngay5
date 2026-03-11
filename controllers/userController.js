import User from "../models/user.js";


// CREATE
export const createUser = async (req, res) => {
    try {

        const user = await User.create(req.body);

        res.json(user);

    } catch (err) {
        res.status(500).json(err.message);
    }
};



// GET ALL (query username includes)

export const getAllUsers = async (req, res) => {

    try {

        const { username } = req.query;

        const filter = { deleted: false };

        if (username) {
            filter.username = { $regex: username, $options: "i" };
        }

        const users = await User
            .find(filter)
            .populate("role");

        res.json(users);

    } catch (err) {
        res.status(500).json(err.message);
    }

};



// GET BY ID

export const getUserById = async (req, res) => {

    try {

        const user = await User
            .findById(req.params.id)
            .populate("role");

        res.json(user);

    } catch (err) {
        res.status(500).json(err.message);
    }

};



// UPDATE

export const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(user);

    } catch (err) {
        res.status(500).json(err.message);
    }

};



// SOFT DELETE

export const deleteUser = async (req, res) => {

    try {

        await User.findByIdAndUpdate(req.params.id, {
            deleted: true
        });

        res.json({ message: "User deleted (soft)" });

    } catch (err) {
        res.status(500).json(err.message);
    }

};



// ENABLE USER

export const enableUser = async (req, res) => {

    try {

        const { email, username } = req.body;

        const user = await User.findOneAndUpdate(
            { email, username },
            { status: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json("User not found");
        }

        res.json(user);

    } catch (err) {
        res.status(500).json(err.message);
    }

};



// DISABLE USER

export const disableUser = async (req, res) => {

    try {

        const { email, username } = req.body;

        const user = await User.findOneAndUpdate(
            { email, username },
            { status: false },
            { new: true }
        );

        if (!user) {
            return res.status(404).json("User not found");
        }

        res.json(user);

    } catch (err) {
        res.status(500).json(err.message);
    }

};