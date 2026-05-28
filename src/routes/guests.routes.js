import { Router } from "express";
import {
  getAllGuests,
  createGuest,
  getGuestById,
  deleteGuest,
  updateGuest,
} from "../controllers/guests.controller.js";

const router = Router();

router.get("/", getAllGuests);
router.get("/:id", getGuestById);
router.post("/", createGuest);
router.delete("/:id", deleteGuest);
router.put("/:id", updateGuest);

export default router;
