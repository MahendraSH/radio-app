import stationsModels from "../../models/stations-models.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";
import ErrorHandler from "../../utils/error-handler.js";
import cloudinary from "cloudinary";
export const addStation = asyncErrorHandler(async (req, res, next) => {

    const { label, url, lang, categories, location, image, description, slogan } = req.body;
    const upload = await cloudinary.uploader.upload(image, {
        folder: "stations",
        crop: "scale",
        width: 300,
        height: 300
    })
    const station = await stationsModels.create({

        label,
        url,
        lang,
        categories,
        location,
        image: {
            public_id: upload.public_id,
            url: upload.secure_url
        },
        description,
        slogan
    });
    res.status(201).json({
        success: true,
        station
    });
})


export const getStations = asyncErrorHandler(async (req, res, next) => {

    const stations = await stationsModels.find().populate("lang").populate("categories").populate("location");

    res.status(200).json({
        success: true,
        stations
    });
})

export const updateStationById = asyncErrorHandler(async (req, res, next) => {
    const id = req.params.id;
    const { label, url, lang, categories, location, image, description, slogan } = req.body;
    if (image) {
        //  delete image
        const station = await stationsModels.findById(id);
        await cloudinary.uploader.destroy(station.image.public_id);

        const upload = await cloudinary.uploader.upload(image, {
            folder: "stations",
            crop: "scale",
            width: 300,
            height: 300
        })
    }
    const station = await stationsModels.findByIdAndUpdate(id, {
        label,
        url,
        lang,
        categories,
        location,
        image: {
            public_id: upload.public_id,
            url: upload.secure_url
        },
        description,
        slogan
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        station
    });
})

export const deleteStationById = asyncErrorHandler(async (req, res, next) => {

    const id = req.params.id;

    await stationsModels.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Station deleted successfully"
    });
})
