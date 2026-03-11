import express from "express";
import {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
    getUsersByRole
} from "../controllers/roleController.js";

const router = express.Router();

router.post("/", createRole);

router.get("/", getAllRoles);

router.get("/:id", getRoleById);

router.put("/:id", updateRole);

router.delete("/:id", deleteRole);


// /roles/id/users

router.get("/:id/users", getUsersByRole);

export default router;  