import { model, Schema } from "mongoose";

const stationSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    lang: {
        type: Schema.Types.ObjectId,
        ref: "Lang",
        required: true
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    ],
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    }
    //  other fields
}, { timestamps: true });

export default model("Station", stationSchema);
