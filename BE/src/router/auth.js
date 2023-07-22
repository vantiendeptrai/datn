import express from "express";

import { register, login, lockAccount, refreshToken } from "../controller/auth";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/lock-account/:id", isAdminMiddleware, lockAccount);
router.post("/refresh-token", refreshToken);

export default router;
