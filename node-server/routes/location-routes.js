import { Router } from "express";
import { getLocations, addLocation, updateLocationById, deleteLocationById } from "./controllers/location-controller.js";
const locationRouter = Router();
locationRouter.route("/").get(getLocations).post(addLocation);
locationRouter.route("/:id").put(updateLocationById).delete(deleteLocationById);

export default locationRouter