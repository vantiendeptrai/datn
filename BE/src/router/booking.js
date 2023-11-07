import express from "express";

import {
  create,
  update,
  remove,
  getAllProducts,
  getProductDetails,
} from "../controller/booking";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.post("/", create);
router.patch("/update/:id", update);
router.get("/getAll", getAllProducts);
router.get("/get/:id", getProductDetails);
router.delete("/:id", isAdminMiddleware, remove);

export default router;
