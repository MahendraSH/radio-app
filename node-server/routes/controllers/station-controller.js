import stationsModels from "../../models/stations-models.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";
import ErrorHandler from "../../utils/error-handler.js";

export const addStation = asyncErrorHandler(async (req, res, next) => {

    const { label, url, lang, categories, location, image, description, slogan } = req.body;

    const station = await stationsModels.create({

        label,
        url,
        lang,
        categories,
        location,
        image,
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
    const station = await stationsModels.findByIdAndUpdate(id, req.body, {
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
