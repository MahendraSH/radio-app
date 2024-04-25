import { Schema, model } from "mongoose"

const locationSchema = new Schema({
    name: String
});

export default model("Location", locationSchema);