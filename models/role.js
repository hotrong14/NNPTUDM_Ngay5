import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        default: ""
    },

    deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

export default mongoose.model("Role", roleSchema);