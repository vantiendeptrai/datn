import express from "express";

import { create, getAll, getOne, update } from "../controller/hotel";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.patch("/:id", update);

export default router;
