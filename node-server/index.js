import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import langRoutes from "./routes/lang-routes.js";
import locationRoutes from "./routes/location-routes.js";
import categoriesRouter from "./routes/categories-router.js";
import errorController from "./middlewares/error-controller.js";
dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})
//  routes 

app.use("/api/langs", langRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/categories", categoriesRouter);

//  error controller
app.use(errorController);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))