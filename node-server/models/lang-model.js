import { Schema, model } from "mongoose";

const langSchema = new Schema({
    name: String
});

export default model("Lang", langSchema);