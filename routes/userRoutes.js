import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    enableUser,
    disableUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/enable", enableUser);

router.post("/disable", disableUser);

export default router;