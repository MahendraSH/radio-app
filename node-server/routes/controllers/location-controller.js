//  location controller

import locationModel from "../../models/location-model.js";
import ErrorHandler from "../../utils/error-handler.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";

export const addLocation = asyncErrorHandler(async (req, res, next) => {

    const { name } = req.body;
    const location = await locationModel.create({ name });
    res.status(201).json({
        success: true,
        location
    });

})

export const getLocations = asyncErrorHandler(async (req, res, next) => {

    const locations = await locationModel.find();

    res.status(200).json({
        success: true,
        locations
    });
})

export const updateLocationById = asyncErrorHandler(async (req, res, next) => {
    const id = req.params.id;

    const { name } = req.body;

    const location = await locationModel.findByIdAndUpdate(id, { name }, { new: true });

    res.status(200).json({
        success: true,
        location
    });

})

export const deleteLocationById = asyncErrorHandler(async (req, res, next) => {

    const id = req.params.id;

    const location = await locationModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        location
    });


})

