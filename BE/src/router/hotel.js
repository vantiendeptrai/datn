import express from "express";

import { getAll, getOne, create, update } from "../controller/hotel";
import { isAdminMiddleware } from "../middleware";
import expressFormidable from 'express-formidable';

const router = express.Router();


router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", isAdminMiddleware, expressFormidable(), create);
router.patch("/:id", isAdminMiddleware, expressFormidable(), update);

export default router;
