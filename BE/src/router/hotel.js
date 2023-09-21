import express from "express";

import { getAll, getOne, create, update } from "../controller/hotel";
import { isAdminMiddleware } from "../middleware";
import expressFormidable from 'express-formidable';

const router = express.Router();


router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", expressFormidable(), create);
router.patch("/:id", expressFormidable(), update);

export default router;
