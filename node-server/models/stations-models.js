import { model, Schema } from "mongoose";

const stationSchema = new Schema({
    label: String,
    url: String,
    lang: {
        type: Schema.Types.ObjectId,
        ref: "Lang"
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location"
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },

    },
    description: String,
    slogan: String,


    //  other fields
});

export default model("Station", stationSchema)