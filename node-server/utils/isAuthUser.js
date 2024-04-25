//  is user authenticated

import asyncErrorHandler from "../middlewares/async-error-handler.js";
import ErrorHandler from "./error-handler.js";
import jwt from "jsonwebtoken";
import userModel from "../models/user-model.js";

const isAuthUser = asyncErrorHandler(async (req, res, next) => {

    const { loginToken } = req.cookies;

    if (!loginToken) {

        return (next(new ErrorHandler("Please login to access this route", 401)));
    }
    const decodeData = jwt.verify(loginToken, process.env.JWT_SECRET);

    const user = await userModel.findById(decodeData.id);
    if (!user) {
        return (next(new ErrorHandler("Please login to access this route", 401)));
    }
    req.user = user;

    next();


});


export default isAuthUser;