import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import langRoutes from "./routes/lang-routes.js";
import locationRoutes from "./routes/location-routes.js";
import categoriesRouter from "./routes/categories-router.js";
import userRouter from "./routes/user-routes.js";
import stationRouter from "./routes/station-routes.js";
import errorController from "./middlewares/error-controller.js";
import cookieParser from "cookie-parser";
import dbConnect from "./db/db-connect.js";
import cloudinary from "cloudinary";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://radio-app-demo.vercel.app", "http://localhost:3000"],

    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//  routes
dbConnect();
app.use("/api/langs", langRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", userRouter);
app.use("/api/stations", stationRouter);

//  error controller
app.use(errorController);

app.listen(process.env.PORT, () =>
  console.log(`Server running  http://localhost:${process.env.PORT}`),
);
