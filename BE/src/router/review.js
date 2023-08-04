import express from "express";

import { create, getAll, getOne, update, remove } from "../controller/review";
import { loginMiddleware } from "../middleware";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", loginMiddleware, create);
router.patch("/:id", loginMiddleware, update);
router.delete("/:id", loginMiddleware, remove);

export default router;
