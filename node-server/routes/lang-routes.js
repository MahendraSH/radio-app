import { Router } from "express"
import { getLangs, addLang, updateLangById, deleteLangById } from "./controllers/lang-controller.js"
import isAuthUser from "../utils/isAuthUser.js";
const langRouter = Router();
langRouter.route("/").get(getLangs).post(isAuthUser, addLang);
langRouter.route("/:id").put(isAuthUser, updateLangById).delete(isAuthUser, deleteLangById);
export default langRouter