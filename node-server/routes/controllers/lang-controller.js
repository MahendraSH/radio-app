import langModel from "../../models/lang-model.js";
import ErrorHandler from "../../utils/error-handler.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";

export const addLang = asyncErrorHandler(async (req, res, next) => {

    const { name } = req.body;

    const lang = await langModel.create({ name });

    res.status(201).json({
        success: true,
        lang
    });
})

export const getLangs = asyncErrorHandler(async (req, res, next) => {

    const langs = await langModel.find();

    res.status(200).json({
        success: true,
        langs
    });

})

export const updateLangById = asyncErrorHandler(async (req, res, next) => {

    const id = req.params.id;

    const { name } = req.body;

    const lang = await langModel.findByIdAndUpdate(id, { name }, { new: true });

    res.status(200).json({
        success: true,
        lang
    });

})

export const deleteLangById = asyncErrorHandler(async (req, res, next) => {

    const id = req.params.id;

    const lang = await langModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        lang
    });

})
