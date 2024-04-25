import { Schema, model } from "mongoose";

const langSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true

    }
}, { timestamps: true });

export default model("Lang", langSchema);