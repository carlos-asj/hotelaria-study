import { Router } from "express";
import {
  getAllGuests,
  createGuest,
  getGuestById,
} from "../controllers/guests.controller.js";

const router = Router();

router.get("/", getAllGuests);
router.get("/:id", getGuestById);
router.post("/", createGuest);

export default router;
