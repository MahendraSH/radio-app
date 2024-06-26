import { Schema, model } from "mongoose"

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true

    }
}, { timestamps: true });

export default model("Location", locationSchema);