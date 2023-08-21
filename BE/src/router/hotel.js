import express from "express";

import { getAll, getOne, create, update } from "../controller/hotel";
import { isAdminMiddleware } from "../middleware";
import upload from "../middleware/uploadImage";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.patch("/:id", update);

export default router;
