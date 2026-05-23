import "dotenv/config";
import express from "express";
import { getStatus } from "./controllers/database.controller.js";

const app = express();
const PORT = 3000;

app.use("/api/v1/status", getStatus);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
