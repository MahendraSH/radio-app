import asyncErrorHandler from "../../middlewares/async-error-handler.js";
import userModel from "../../models/user-model.js";
import cookieMaker from "../../utils/cookie-maker.js";
import ErrorHandler from "../../utils/error-handler.js";

export const addUser = asyncErrorHandler(async (req, res, next) => {

    const { name, password } = req.body;

    const user = await userModel.create({ name, password });
    res.status(201).json({
        success: true,
        user
    });

})


export const getUsers = asyncErrorHandler(async (req, res, next) => {

    const users = await userModel.find();

    res.status(200).json({
        success: true,
        users
    });

})

export const loginUser = asyncErrorHandler(async (req, res, next) => {

    const { name, password } = req.body;

    const user = await userModel.findOne({ name }).select("+password");

    if (!user) {

        return (next(new ErrorHandler("Invalid credentials", 401)));

    }
    // console.log(user);
    // console.log(password);

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {

        return (next(new ErrorHandler("Invalid credentials", 401)));

    }

    cookieMaker(res, 200, user);

})

export const profile = asyncErrorHandler(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    })

})
export const logout = asyncErrorHandler(async (req, res, next) => {

    res.cookie("loginToken", null, {

        expires: new Date(Date.now()),

        httpOnly: true,

        secure: true,

        sameSite: 'None',

    });

    res.status(200).json({

        success: true,

        message: "Logged out",

    });

});

