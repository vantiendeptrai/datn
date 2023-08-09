import express from "express";

import { create, update, remove } from "../controller/Booking";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", isAdminMiddleware, remove);

export default router;
