import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://trongarsenal08_db_user:QLRhZnr5L7wDbt2e@cluster0.kkjz9sg.mongodb.net/NNPTUDM_Day5");

app.use("/users", userRoutes);
app.use("/roles", roleRoutes);

app.listen(3000, () => {
    console.log("Server running");
});