import { Router } from "express";
import isAuthUser from "../utils/isAuthUser.js";
import { addUser, getUsers, loginUser, logout, profile } from "./controllers/user-controller.js";

const userRouter = Router();

userRouter.route("/").get(isAuthUser, getUsers).post(isAuthUser, addUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/me").get(isAuthUser, profile)
userRouter.route("/logout").get(isAuthUser, logout);

export default userRouter
        