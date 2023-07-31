import express from "express";

import { isAdminMiddleware } from "../middleware/index";
import { create, getAll, getOne, remove, update } from "../controller/amenities";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", isAdminMiddleware, create);
router.patch("/:id", isAdminMiddleware, update);
router.delete("/:id", isAdminMiddleware, remove);

export default router;
