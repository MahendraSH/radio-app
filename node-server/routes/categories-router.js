import { Router } from "express";
import { getCategories, addCategory, updateCategoryById, deleteCategoryById } from "./controllers/categories-controller.js";

const categoriesRouter = Router();

categoriesRouter.route("/").get(getCategories).post(addCategory);

categoriesRouter.route("/:id").put(updateCategoryById).delete(deleteCategoryById);

export default categoriesRouter;
