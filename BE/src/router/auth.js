import express from "express";

import {
  register,
  login,
  lockAccount,
  refreshToken,
  getUserByToken,
} from "../controller/auth";
import { isAdminMiddleware, loginMiddleware } from "../middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/lock-account/:id", isAdminMiddleware, lockAccount);
router.get("/refresh-token", refreshToken);
router.get("/get-user", loginMiddleware, getUserByToken);

export default router;
