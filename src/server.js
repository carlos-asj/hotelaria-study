import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { getStatus } from "./controllers/database.controller.js";
import guestsRoutes from "./routes/guests.routes.js";

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use("/api/v1/status", getStatus);
app.use("/api/v1/guests", guestsRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
