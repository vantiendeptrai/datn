import express from "express";

import { create, getAll, getOne, update } from "../controller/room";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", isAdminMiddleware, create);
router.patch("/:id", isAdminMiddleware, update);

export default router;
