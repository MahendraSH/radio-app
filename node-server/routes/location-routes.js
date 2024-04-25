import { Router } from "express";
import { getLocations, addLocation, updateLocationById, deleteLocationById } from "./controllers/location-controller.js";
import isAuthUser from "../utils/isAuthUser.js";
const locationRouter = Router();
locationRouter.route("/").get(getLocations).post(isAuthUser, addLocation);
locationRouter.route("/:id").put(isAuthUser, updateLocationById).delete(isAuthUser, deleteLocationById);

export default locationRouter