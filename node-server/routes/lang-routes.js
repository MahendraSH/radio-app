import { Router } from "express"
import { getLangs, addLang, updateLangById, deleteLangById } from "./controllers/lang-controller.js"
const langRouter = Router();
langRouter.route("/").get(getLangs).post(addLang);
langRouter.route("/:id").put(updateLangById).delete(deleteLangById);
export default langRouter