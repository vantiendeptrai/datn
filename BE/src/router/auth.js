import express from "express";

import {
  register,
  login,
  lockAccount,
  refreshToken,
  getUserByToken,
  googleOauth,
  logout,
} from "../controller/auth";
import { isAdminMiddleware, loginMiddleware } from "../middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/lock-account/:id", isAdminMiddleware, lockAccount);
router.get("/refresh-token", refreshToken);
router.get("/get-user", loginMiddleware, getUserByToken);
router.get("/google", googleOauth);
router.post("/logout", logout);

export default router;
