import { Router } from "express";
import { getStations, addStation, updateStationById, deleteStationById } from "./controllers/station-controller.js";
import isAuthUser from "../utils/isAuthUser.js";

const stationRouter = Router();
stationRouter.route("/").get(getStations).post(isAuthUser, addStation);
stationRouter.route("/:id").put(isAuthUser, updateStationById).delete(isAuthUser, deleteStationById);
export default stationRouter