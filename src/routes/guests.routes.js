import { Router } from "express";
import { getAllGuests } from "../controllers/guests.controller.js";

const router = Router();

router.get("/", getAllGuests);

export default router;
