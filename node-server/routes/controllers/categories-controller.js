import categoriesModel from "../../models/categories-model.js";
import ErrorHandler from "../../utils/error-handler.js";
import asyncErrorHandler from "../../middlewares/async-error-handler.js";

export const addCategory = asyncErrorHandler(async (req, res, next) => {

    const { name } = req.body;

    const category = await categoriesModel.create({ name });

    res.status(201).json({
        success: true,
        category
    });
})

export const getCategories = asyncErrorHandler(async (req, res, next) => {

    const categories = await categoriesModel.find();

    res.status(200).json({
        success: true,
        categories
    });

})

export const updateCategoryById = asyncErrorHandler(async (req, res, next) => {
    const id = req.params.id;
    const { name } = req.body;

    const category = await categoriesModel.findByIdAndUpdate(id, { name }, { new: true });

    res.status(200).json({
        success: true,
        category
    });

})

export const deleteCategoryById = asyncErrorHandler(async (req, res, next) => {

    const id = req.params.id;

    const category = await categoriesModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        category
    });

})

