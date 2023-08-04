import express from "express";

import { create, getAll, getOne, update, remove } from "../controller/service";
import { isAdminMiddleware } from "../middleware/index";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", isAdminMiddleware, create);
router.patch("/:id", isAdminMiddleware, update);
router.delete("/:id", isAdminMiddleware, remove);

export default router;
