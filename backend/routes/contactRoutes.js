import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getContactById);
router.patch("/:id/status", updateContactStatus);

export default router;
