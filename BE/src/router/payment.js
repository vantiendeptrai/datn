import express from "express";

import { getAll, create } from "../controller/payment";
import { isAdminMiddleware } from "../middleware";
import { loginMiddleware } from "../middleware";
const router = express.Router();

router.get("/", loginMiddleware, getAll);
router.post("/", isAdminMiddleware, create);

export default router;
