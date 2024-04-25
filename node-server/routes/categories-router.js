import { Router } from "express";
import { getCategories, addCategory, updateCategoryById, deleteCategoryById } from "./controllers/categories-controller.js";
import isAuthUser from "../utils/isAuthUser.js";

const categoriesRouter = Router();

categoriesRouter.route("/").get(getCategories).post(isAuthUser, addCategory);

categoriesRouter.route("/:id").put(isAuthUser, updateCategoryById).delete(isAuthUser, deleteCategoryById);

export default categoriesRouter;
