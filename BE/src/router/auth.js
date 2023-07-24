import express from "express";

import {
  register,
  login,
  lockAccount,
  refreshToken,
  getUser,
} from "../controller/auth";
import { isAdminMiddleware, loginMiddleware } from "../middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/lock-account/:id", isAdminMiddleware, lockAccount);
router.post("/refresh-token", refreshToken);
router.get("/get-user", loginMiddleware, getUser);

export default router;
